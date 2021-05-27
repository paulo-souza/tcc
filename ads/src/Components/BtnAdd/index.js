import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

export default function BtnAdd(props) {
    return(
        <button type={'button'} title={props.title} className={'btnAdd'} onClick={props.action}>
            <FontAwesomeIcon icon={faPlus} color={'#fff'} size={'lg'} />
        </button>
    );
}