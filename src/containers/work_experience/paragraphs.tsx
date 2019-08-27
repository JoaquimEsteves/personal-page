import React, { Fragment } from 'react';
import { map_props } from './map/map';

export type experience_paragraph = {
    title: string,
    paragraphs: (string | JSX.Element)[],
    location?: map_props,
}

export const city_college_plymouth: experience_paragraph = {
    title: "City College Plymouth, UK",
    paragraphs: [
        `A-Levels, Finished in July 2012
        Subjects: Maths, Physics and Film Studies`,
        `I've had the priviledge of having studied in the United Kingdom, which did wonders for my English!`
    ],
    location: {
        center: [50.3679, -4.1434],
        anchor: [50.37363, -4.16642],
        zoom: 13
    }
}

export const tecnico: experience_paragraph = {
    title: "Instituto Superior Técnico, Lisboa - Portugal",
    paragraphs: [
        `Bologna Degree in Information Systems and Computer Engineering , Finished in July 2017`,
        <Fragment>Subjects & Overview: Available in english
            <a
                rel="noopener noreferrer" target="_blank"
                href="https://fenix.tecnico.ulisboa.pt/cursos/leic-a"
            > here</a></Fragment>,
        <Fragment><i>The</i> prestige Engineering university in Portugal</Fragment>
    ],
    location: {
        center: [38.7372, -9.1308],
        anchor: [38.73676, -9.13807],
        zoom: 12
    }

}

export const orange: experience_paragraph = {
    title: `Orange - AKKA Lyon
    Duration: 6 Months`,
    paragraphs: [
        'Joined the Orange Big Data team in order to develop a new interface for an old system.',
        `The project, codenamed streams, was designed, to parse and filter a database with more than 200 million entries!
        Users were also able to execute 'compute' functions on the data. These included classic regex wildcards and
        other fancier operations such as a dynamic pivot table that counted the and displayed any row!
        The data would then be presented to in a nice, user friendly way, in part thanks to a javascript library 
        called DataTables`,
        <Fragment>
            Technical stack included, <code>PHP</code> and the <code>OFT</code> framework,
            an Orange made fork of the popular Zend framework.
            I'm particularly proud of the server-side data processing, as the interface queried the backend extensively for the next table of data!
        </Fragment>,
    ],
    location: {
        center: [45.7516,4.8289],
        anchor: [45.7550827, 4.8347088],
        zoom: 12
    }
}

export const hyperloop: experience_paragraph = {
    title: `HyperLoop Transportation Technologies - AKKA Toulouse
    Duration: 6 Months`,
    paragraphs: [
        <Fragment>
            Joined the HyperLoop <i>R&D</i> team as an on-site consultant
        </Fragment>,
        `My main task was to advise the team on the different suppliers of cloud services`,
        <Fragment>
            I also had the pleasure of automating some boring HR related tasks. This was mostly done through Google's,
        own scripting language <code>GAS</code> and later on by programming Excel Add-ins.
        (Sadly some these ended up being discarded, as the team had yet to transition to office 365)</Fragment>,
        <Fragment>
            By far the coolest project I had the pleasure to work with was the development of a nodal thermic
            simulator for the hyperloop tube!
            The program, entirely written in <code>Python</code> with some numpy on the side, would simulate heat transfers
            throughout the life cycle of a HyperLoop tube's use and show it all of in a cute <code>plotly</code> graph..
        </Fragment>


    ],
    location: {
        center: [43.5751,1.4414],
        anchor: [43.53716,1.36477],
        zoom: 11
    }
}


export const telespazio: experience_paragraph = {
    title: `Telespazio - AKKA Toulouse
    Duration: 1 Month`,
    paragraphs: [
        `Development unit-tests for an ongoing project related to updating an old server`,
        <Fragment>
            The <code>C++</code> server was undergoing an transformation in regards to their
        messaging protocol. Having recently adopted the <code>Protobuf</code> protocol.
                            My job was to create a test suite for these messages.
        </Fragment>
    ],

    location: {
        center: [43.5751,1.4414],
        anchor: [43.65933,1.36427],
        zoom: 11
    }
}

export const sigfox: experience_paragraph = {
    title: `Sigfox - AKKA Toulouse
    Duration: 4 Month`,
    paragraphs: [
        `Acted as a full-stack developer for a website that aimed to emulate IoT development!`,
        `The application's goal was to make IoT development simple, by emulating all of the server's backend in our own Python
        server, developers would be able to quickly test out signals and logic.`,
        <Fragment>
            The server was written in <code>Python</code>, with some glued <code>C</code> libraries acting as
       an intermediary in between the low end IoT devices and the server.
        </Fragment>,
        <Fragment>
            <small>(thank heavens, I didn't have to touch the C libraries)</small>
        </Fragment>,
        `The server used the async Python libraries quite extensively, and it was a pleasure to work with.`,
        `As a full-stack developer I also had to edit the existing Front-End. The Front end was build with the classic 
        front end tools of plain old Vanilla Js, HTML and CSS with a dash of bootstrap`
    ],
    location: {
        center: [43.5751,1.4414],
        anchor: [43.65933,1.36427],
        zoom: 11
    }
}
