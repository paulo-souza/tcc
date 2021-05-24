import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../Css/BtnVoltar.css';

export default function BtnVoltar({path}) {
    return( 
        <Link to={path} className={'btnVoltar'}>
            <FontAwesomeIcon icon={faArrowLeft} color={'#000'} size={'lg'} />            
        </Link>
        );
}