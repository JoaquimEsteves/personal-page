import React from 'react';
import './workList.scss';

const DEFAULT_LOCATION = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.84796264156!2d-9.230242104259075!3d38.743739594088744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C+Portugal!5e0!3m2!1sen!2sfr!4v1565698302061!5m2!1sen!2sfr";

const test_paragraph = `Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur
sagittis, urna est ultricies eros, ac porta sem turpis quis leo.`;

type WorkProps = {
    title: string,
    paragraphs: string[],
    images?: string[],
    location?: string,
}

export interface RealWorkProps extends WorkProps {
    key: any
    onClick: () => void;
}


class Work extends React.PureComponent<RealWorkProps> {
    // TODO: Add on click event to change the map location yo
    render() {
        const paragraphs = this.props.paragraphs.map((paragraph, id) => {
            return <p key={id}>{paragraph}</p>
        });
        const image_array = this.props.images || [];
        const images = image_array.map((image, id) => {
            return <img src={image} key={id} alt="work related"></img>
        });
        return (
            <div key={this.props.key}
                onClick={this.props.onClick}>
                <div className="work-box text-center">
                    {   // If it's a clickable element, give it a little marker icon
                        (this.props.location) 
                        ? <i className="lni-map-marker"/> : null
                    }
                    <div>
                        <h6>{this.props.title}</h6>
                        {images}
                        {paragraphs}
                    </div>
                </div>
            </div>
        );
    }
}

export interface WorkListProps {
    works: WorkProps[],
    location_src?: string
}

export const exampleWork: WorkListProps = {
    works: [
        {
            title: 'yo', paragraphs: [test_paragraph, test_paragraph],
            location: DEFAULT_LOCATION
        },
        { title: 'yo', paragraphs: ['yo', test_paragraph] },
        { title: 'yo', paragraphs: ['yo', 'yo'] },
        { title: 'yo', paragraphs: ['yo', 'yo'] },
        {
            title: 'yo', paragraphs: ['yo', 'yo'],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79064.68822733777!2d1.3648228949762264!3d43.637520967826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeaf87dd1b2eab%3A0x8cd37106551adcaf!2sAKKA+Technologies!5e0!3m2!1sen!2sfr!4v1566308709446!5m2!1sen!2sfr"
        },
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
        const Works = this.props.works.map((WorkParams, id) => {
            let onClick = () => { };
            if (WorkParams.location) {
                onClick = () => {
                    if (this.state.location_src !== WorkParams.location) {
                        this.setState({ location_src: WorkParams.location as string })
                    }
                }
            }
            let work = new Work({ ...WorkParams, key: id, onClick: onClick });
            return work.render();
        });
        return (
            <section id="work">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-25">
                                <h2 className="title">Work Experience</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur
                            sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row justify-content-center">
                                {Works}
                            </div>
                        </div>
                        <div className="col-lg-6 work-map">

                            <div className="gmap_canvas">
                                <iframe
                                    title='yo'
                                    id="giframe"
                                    src={this.state.location_src}
                                    scrolling="yes" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkList;