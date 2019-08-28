import React, { Fragment } from 'react';
import './about.scss';
import $ from 'jquery';

export type skill = {
    name: string | JSX.Element,
    proficiency: number,
    key?: number;
}

export type aboutProps = {
    skills: skill[],
}

export const exampleSkills: aboutProps = {
    skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'Javascript & Family', proficiency: 4 },
        { name: 'PHP', proficiency: 4 },
        { name: 'SQL', proficiency: 3 },
        {
            name:
                <Fragment>
                    <small>(It's been a long time since I've touched these)</small> <br /> Java 
                </Fragment>,
            proficiency: 2
        },
        { name: 'C++', proficiency: 2 },
    ]
}

const Skill = (skill: skill) => {
    const data_with = (skill.proficiency / 5) * 100;
    return (
        <div key={skill.key} className="skill-item">
            <div className="skill-header">
                <div className="row">
                    <div className="col-lg-6">
                        <h6>{skill.name}</h6>
                    </div>
                    <div className="col-lg-6">
                        <h6 className="skill-stars">{'★'.repeat(skill.proficiency)}</h6>
                    </div>
                </div>
            </div>
            <div className="skill-bar" data-width={data_with}>
                <div className="bar-inner">
                    <div className="bar progress-line" data-width={data_with}></div>
                </div>
            </div>
        </div>
    );
}

const AboutIntro = () => (
    <div className="row justify-content-center">
        <div className="col-lg-8">
            <div className="section-title box text-center">
                <h2 className="title">About Me</h2>
                <p> Hello there, my name is Joaquim Esteves and this is my little corner of the internet.
                </p>
            </div>
        </div>
    </div>
);

const Info = (explanation: string, contact: string, icon: string) => (
    <li>
        <div className="single-info d-flex align-items-center">
            <div className="info-icon">
                <i className={icon}></i>
            </div>
            <div className="info-text">
                <p><span>{explanation}</span> {contact}</p>
            </div>
        </div>
    </li>
);

export class About extends React.PureComponent<aboutProps> {

    componentDidMount() {
        $('.progress-line').each(function () {
            let max_width = $(this).attr('data-width');
            if (this.style.width !== undefined) {
                this.style.width = max_width + '%' as string;
            }
        });
    }

    render() {
        const skillArray = this.props.skills.map((skillProps, index) => {
            return Skill({ ...skillProps, key: index });
        });
        return (
            <section id="about" className="about-area">
                <div className="container">
                    <AboutIntro />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h5 className="about-title">Overview</h5>
                                <p>
                                    I'm a Portuguese Software Engineer, I like long walks on the beach, travelling
                                    and programming.
                                    <br />
                                    <small>(Being serious now, given that this isn't a profile on a 
                                        dating website)</small>
                                    <br />
                                    On my right is an overview of the
                                    programming languages I've worked with.
                                    <br />
                                    I've also had to deal with quite a few frameworks and language super-sets,
                                    so if you've got a Flask/React/Etc project don't hesitate to ask me for my experience!

                                </p>
                                <ul>
                                    {Info('Birth Date:', '01/09/93', 'lni-calendar')}
                                    {Info('Email:', 'hire.joaquim.esteves@gmail.com', 'lni-envelope')}
                                    {Info('', 'Currently in Lyon - France', 'lni-map-marker')}
                                </ul>
                                <br />

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-skills">
                                {skillArray}
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="about-content">
                                <h5 className="about-title">Stuff I'm not good at, but would love to learn!</h5>
                                <ul>
                                    <li className="mt-2">
                                        Data Science
                                        <p>
                                            As a self ted Python nerd and zealot I'd love to sink my teeth into
                                            this field!
                                        </p>
                                    </li>
                                    <li className="mt-4">
                                        Machine Learning
                                        <p>
                                            Have you <b>seen</b> the stuff people are up to nowadays with
                                            machine learning? It's like magic, of course I want to learn!
                                        </p>
                                    </li>
                                    <li className="mt-4">
                                        Various FrontEnd Frameworks
                                        <p>
                                            I've mostly worked as a backend developer, with this very site being the
                                            first project I've ever completed using a javascript library that's more
                                            recent than jQuery.
                                            However, I've  got a huge interest in this field :)
                                            <br />
                                            The code for this page is freely available for snooping    
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://github.com/JoaquimEsteves/personal-page"> here
                                                </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <h5 className="about-title">Real World Languages</h5>
                                <ul>
                                    <li>
                                        Portuguese
                                        <p>
                                            It's my mother tongue, although I've been told I have a funny accent.
                                        </p>
                                    </li>
                                    <li>
                                        Spanish
                                        <p>
                                            All Portuguese come with the Spanish-language package by default.
                                            Many of the friends I've made throughout my life as an emigrant have been Spaniards,
                                            and as such I've developed a not-bad accent.
                                            <br/>
                                            Just don't ask me to write in Spanish, It's basically Portuguese with 
                                            the grammar all wrong, I can't for the life of me get it.
                                        </p>
                                    </li>
                                    <li>
                                        English
                                        <p>
                                            I lived two years in Plymouth UK and have considered myself quite fluent
                                             in English for many years.
                                             <br/> I've even developed a killer impression of the accent,
                                              you can ask me about it on any occasion.
                                        </p>
                                    </li>
                                    <li>
                                        French
                                        <p>
                                            I've been living in France for the past year and half,
                                             having worked for the past six months entirely in French; although it's
                                            by far my weakest language.
                                            In classical immigrant fashion, the number of words I know is in the dozens,
                                            and I get stumped when to native speakers talk to each other
                                            and I get stuck in the middle, mais je parviens.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}