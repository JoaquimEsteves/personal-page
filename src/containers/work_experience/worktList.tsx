import React from 'react';
import './workList.scss';
import ErrorBoundary from '../../components/error_boundaries/error-boundaries';
import { experience_paragraph, city_college_plymouth, tecnico, orange, telespazio, hyperloop, sigfox } from './paragraphs';
import Scroll from './scroll/scroll';
import Map, { map_props } from './map/map';


const DEFAULT_LOCATION: map_props = {
    center: [45.7516, 4.8289],
    zoom: 12
}

// type WorkProps = {
//     title: string,
//     paragraphs: (string | JSX.Element)[],
//     location?: string,
// }

export interface RealWorkProps extends experience_paragraph {
    onClick: () => void;
}

const ExperienceCard = (props: RealWorkProps) => {
    const paragraphs = props.paragraphs.map((paragraph, id) => {
        return <p className="mb-1" key={id}>{paragraph}</p>
    });
    return (
        <div
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
    work: experience_paragraph[],
    education: experience_paragraph[],
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
    location_src: map_props
}

class WorkList extends React.Component<WorkListProps, WorkListState> {
    constructor(props: WorkListProps) {
        super(props);
        if (!props.location_src) {
            this.state = { location_src: DEFAULT_LOCATION };
        }
    }

    render() {
        const setupOnClick = (experience_props: experience_paragraph) => {
            let onClick = () => { };
            if (experience_props.location) {
                onClick = () => {
                    console.log(this.state.location_src !== experience_props.location);
                    console.log(this.state.location_src, 'yo!', experience_props.location);
                    if (this.state.location_src !== experience_props.location) {
                        this.setState({ location_src: experience_props.location as map_props })
                    }
                }
            }
            return onClick;
        }

        const getCards = (experience: experience_paragraph[], className: string) => {
            return experience.map((experience_props, id) => {
                return <div className={className} key={id}>{
                    ExperienceCard({ ...experience_props, onClick: setupOnClick(experience_props) })
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
                                <p>I've had the pleasure to work and study in three distinct countries
                                    in Europe. The highlights are displayed bellow, with more
                                    detailed descriptions and other works residing in my CV</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 scrollable">
                            <h4 className="row justify-content-center">Work</h4>
                            <Scroll>
                                <div className="row justify-content-center">
                                    {work_cards}
                                </div>
                            </Scroll>
                            <h4 className="row justify-content-center">Education</h4>
                            <div className="row justify-content-center">
                                {education_cards}
                            </div>
                        </div>
                        <div className="col-md-5 work-map">
                            <ErrorBoundary>
                                {Map(this.state.location_src)}
                            </ErrorBoundary>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default WorkList;