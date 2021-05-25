import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BtnVoltar({path}) {
    return( 
        <Link to={path} className={'btnNav'}>
            <FontAwesomeIcon icon={faArrowLeft} color={'#000'} size={'lg'} />            
        </Link>
        );
}