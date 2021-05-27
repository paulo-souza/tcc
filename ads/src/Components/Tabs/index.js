import React from 'react';
import '../../Css/Tabs.css';


export default function Tabs(props) {
   
    return (
        <div id={'tabs'} className={'ui-tabs-vertical ui-helper-clearfix'}>
            <ul>
                <li>
                    <a href={'#a'}>Tab A</a>
                </li>
                <li>
                    <a href={'#b'}>Tab B</a>
                </li>
                <li>
                    <a href={'#c'}>Tab C</a>
                </li>
                <li>
                    <a href={'#d'}>Tab D</a>
                </li>
            </ul>

            <div id={'a'}>
                Content of A
            </div>

            <div id={'b'}>
                Content of B
            </div>

            <div id={'c'}>
                Content of C
            </div>

            <div id={'d'}>
                Content of D
            </div>
        </div>
    );
}