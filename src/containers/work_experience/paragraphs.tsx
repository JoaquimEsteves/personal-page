import React, { Fragment } from 'react';


export const city_college_plymouth = {
    title: "City College Plymouth, UK",
    paragraphs: [
        `A-Levels, Finished in July 2012
        Subjects: Maths, Physics and Film Studies`,
        `I've had the priviledge of having studied in the United Kingdom, which did wonders for my English!`
    ],
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20359.415677540073!2d-4.1571976803693325!3d50.36791641391405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c936b9390d647%3A0xaaf83fc30630e78c!2sCity+College+Plymouth!5e0!3m2!1sfr!2sfr!4v1566387612606!5m2!1sfr!2sfr"
}

export const tecnico = {
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
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1718215239357!2d-9.140893684795914!3d38.7368191795958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a24aa81f17%3A0x880c7c731a54423!2sInstituto+Superior+T%C3%A9cnico!5e0!3m2!1sfr!2sfr!4v1566388055231!5m2!1sfr!2sfr"

}

export const orange = {
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
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.801849465823!2d4.832653915440619!3d45.755118279105446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea51c2f672d1%3A0xaab93858fed36ccb!2sA.v.e.a.+la+Poste!5e0!3m2!1sfr!2sfr!4v1566393141974!5m2!1sfr!2sfr"
}

export const hyperloop = {
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
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.2160521763344!2d1.3678176165004357!3d43.53953806778952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb9e396a82ee3%3A0x4e5c1be16fd322a5!2sHyperloop+Transportation+Technologies!5e0!3m2!1sen!2sfr!4v1566397592260!5m2!1sen!2sfr"
}


export const telespazio = {
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

    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4663007950985!2d1.3622895165017!3d43.659271060054216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeaf87dd1b2eab%3A0x8cd37106551adcaf!2sAKKA+Technologies!5e0!3m2!1sen!2sfr!4v1566398334714!5m2!1sen!2sfr"
}

export const sigfox = {
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
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4663007950985!2d1.3622895165017!3d43.659271060054216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeaf87dd1b2eab%3A0x8cd37106551adcaf!2sAKKA+Technologies!5e0!3m2!1sen!2sfr!4v1566398334714!5m2!1sen!2sfr"
}
