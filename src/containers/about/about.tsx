import React from 'react';
import './about.scss';
import $ from 'jquery';

export type skill = {
    name: string,
    proficiency: number,
    key?: number;
}

export type aboutProps = {
    skills: skill[],
}

export const exampleSkills: aboutProps = {
    skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'ESCMAScript Family', proficiency: 4 },
        { name: 'C++', proficiency: 3 },
        { name: 'etc', proficiency: 3 },
        { name: 'etc', proficiency: 3 },
        { name: 'etc', proficiency: 3 },
        { name: 'etc', proficiency: 3 },
        { name: 'etc', proficiency: 3 },
        { name: 'etc', proficiency: 3 },
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
                <h2 className="title">Texto De Introducao</h2>
                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur
                            sagittis, urna est ultricies eros, ac porta sem turpis quis leo.
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
                                <h5 className="about-title">Mais Texto</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul>
                                    {Info(
                                        'Birth Date:',
                                        '01/09/39',
                                        'lni-calendar'
                                    )}
                                    {Info(
                                        'Email:',
                                        '???????',
                                        'lni-envelope'
                                    )}
                                    {Info(
                                        'Phone Number',
                                        '???????',
                                        'lni-phone-handset'
                                    )}
                                    {Info(
                                        '',
                                        'Currently in Lyon - France',
                                        'lni-map-marker'
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-skills">
                                {skillArray}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}