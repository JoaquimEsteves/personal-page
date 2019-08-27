import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

export type map_props = {
    center: [number, number],
    anchor?: [number, number],
    zoom: number,
}

/**
 * test values
 *     <Map center={[50.879, 4.6997]} zoom={12}>
        <Marker anchor={[50.874, 4.6947]} />
    </Map>
 */

const myMap = (props: map_props) => (
    <Map center={props.center} zoom={props.zoom}>
        {props.anchor 
            ? <Marker anchor={props.anchor} />
            : null
        }
    </Map>
);

export default myMap;