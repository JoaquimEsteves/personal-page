import React from 'react';
import './workList.scss';
import ErrorBoundary from '../../components/error_boundaries/error-boundaries';
import { city_college_plymouth, tecnico, orange, telespazio, hyperloop, sigfox } from './paragraphs';
import Scroll from './scroll/scroll';


const DEFAULT_LOCATION = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.84796264156!2d-9.230242104259075!3d38.743739594088744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C+Portugal!5e0!3m2!1sen!2sfr!4v1565698302061!5m2!1sen!2sfr";

type WorkProps = {
    title: string,
    paragraphs: (string | JSX.Element)[],
    location?: string,
}

export interface RealWorkProps extends WorkProps {
    key: number
    onClick: () => void;
}

const ExperienceCard = (props: RealWorkProps) => {
    const paragraphs = props.paragraphs.map((paragraph, id) => {
        return <p className="mb-1" key={id}>{paragraph}</p>
    });
    return (
        <div key={props.key}
            onClick={props.onClick}
            className="work-box text-center">
            {   // If it's a clickable element, give it a little marker icon
                (props.location)
                    ? <i className="lni-map-marker" /> : null
            }
            <div>
                <h6>{props.title}</h6>
                {paragraphs}
            </div>
        </div>
    );
}

export interface WorkListProps {
    work: WorkProps[],
    education: WorkProps[],
    location_src?: string
}

export const exampleWork: WorkListProps = {
    work: [
        orange,
        hyperloop,
        telespazio,
        sigfox,
    ],
    education: [
        city_college_plymouth,
        tecnico
    ]
};

export type WorkListState = {
    location_src: string
}

class WorkList extends React.Component<WorkListProps, WorkListState> {
    constructor(props: WorkListProps) {
        super(props);
        if (!props.location_src) {
            this.state = { location_src: DEFAULT_LOCATION };
        }
    }

    render() {
        const setupOnClick = (experience_props: WorkProps) => {
            let onClick = () => { };
            if (experience_props.location) {
                onClick = () => {
                    if (this.state.location_src !== experience_props.location) {
                        this.setState({ location_src: experience_props.location as string })
                    }
                }
            }
            return onClick;
        }

        const getCards = (experience: WorkProps[], className: string) => {
            return experience.map((experience_props, id) => {
                return <div className={className}>{
                    ExperienceCard({ ...experience_props, key: id, onClick: setupOnClick(experience_props) })
                }</div>;
            });
        }
        const work_cards = getCards(this.props.work, 'col-md-10 mb-5');
        const education_cards = getCards(this.props.education, "col-md-6 mb-5");
        return (
            <section id="work">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title box text-center">
                                <h2 className="title">Experience & Education</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur
                            sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 scrollable">
                                <h4 className="row justify-content-center">Education</h4>
                                <div className="row justify-content-center">
                                    {education_cards}
                                </div>
                                <h4 className="row justify-content-center">Work</h4>
                        <Scroll>
                                <div className="row justify-content-center">
                                    {work_cards}
                                </div>
                        </Scroll>
                        </div>
                        <div className="col-md-5 work-map">
                            <ErrorBoundary>
                                <div className="gmap_canvas">
                                    <iframe
                                        title='yo'
                                        id="giframe"
                                        src={this.state.location_src}
                                        scrolling="yes" />
                                </div>
                            </ErrorBoundary>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default WorkList;