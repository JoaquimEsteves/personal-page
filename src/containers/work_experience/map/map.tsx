import React from 'react';
import Map from './pigeon-maps-fork/index';
import Marker from 'pigeon-marker';

export type map_props = {
    center: [number, number],
    anchor?: [number, number],
    zoom: number,
}

const myMap = (props: map_props) => (
    // I have to ignore this line, given that it's a build file.
    // And there's no typing 
    //@ts-ignore
    <Map center={props.center} zoom={props.zoom}>
        {props.anchor 
            ? <Marker anchor={props.anchor} />
            : null
        }
    </Map>
);

export default myMap;