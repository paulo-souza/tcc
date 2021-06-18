import React from 'react';
import '../../Css/Loading.css';

export default function Loading() {
    return(
        <div className={'lds-ellipsis'}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}