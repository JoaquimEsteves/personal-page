import React from 'react';
import './scroll.scss';

const Scroll = (props: { children: React.ReactNode; }) => (
    <div className="scrollBar">
        {props.children}
    </div>
);

export default Scroll;
