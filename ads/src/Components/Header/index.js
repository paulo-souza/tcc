import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    const { toogleModalUsuario } = useContext(AuthContext);

    return (
        <nav>
            <div className={'container_title'}>
                <h2 className={'titulo'}>{props.title}</h2>
            </div>

            <div className={'container_buttons'}>
                <button type={'button'} title={'Notificações'} className={'btnNav'}>
                    <FontAwesomeIcon icon={faBell} color={'#DAA520'} size={'lg'} />
                </button>

                <button type={'button'} title={'Gerenciar conta de usuário'} className={'btnNav'} onClick={toogleModalUsuario}>
                    <FontAwesomeIcon icon={faUser} color={'#4682B4'} size={'lg'} />
                </button>
            </div>
        </nav>
    );
}