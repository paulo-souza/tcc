import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../../Css/ModalUsuario.css';

export default function ModalUsuario() {
    const { toogleModalUsuario, usuario } = useContext(AuthContext);

    return(
        <div className={'modalUsuario'}>
            <div className={'containerModalUsuario'}>
                    <button id={'btnFecharModalUsuario'} type={'button'} title={'Fechar modal'} onClick={toogleModalUsuario}>
                        <FontAwesomeIcon icon={faTimes} color={'#000'} style={{fontSize: 18, color: '#999', fontWeight: 100}} />  
                    </button>
                    
                    <div className={'containerFotoModalUsuario'}>
                        <button className={'btnFotoModalUsuario'} type={'button'} title={'Alterar foto'}>
                            <FontAwesomeIcon icon={faUser} color={'#4682B4'} size={'5x'} />
                        </button>

                        <span id={'txtModalUsuarioNome'}>{usuario.nome}</span>
                        <span id={'txtModalUsuarioEmail'}>{usuario.email}</span>
                    </div>

                    <div className={'containerLinksModalUsuario'}>
                        <a href={'#'}>Alterar senha</a>
                        <a href={'#'}>Alterar nome de usuário</a>
                        <a href={'#'}>Auditoria</a>
                        <a href={'#'}>Gerenciar usuários</a>
                    </div>

                    <div id={'containerBtnSair'}>
                        <button id={'btnSair'} type={'button'} title={'Sair do sistema'}>Sair</button>
                    </div>

            </div>
        </div>
    );
}