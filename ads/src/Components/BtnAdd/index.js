import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

export default function BtnAdd(props) {
    return(
        <Link title={props.title} className={'btnAdd'} to={props.path}>
            <FontAwesomeIcon icon={faPlus} color={'#fff'} size={'lg'} />
        </Link>
    );
}