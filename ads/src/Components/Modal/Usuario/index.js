import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import '../../../Css/ModalUsuario.css';

export default function ModalUsuario() {
    const { toogleModalUsuario, usuario, sairSistema } = useContext(AuthContext);

    return(
        <div className={'modalUsuario'}>
            <div className={'containerModalUsuario'}>
                    <button id={'btnFecharModalUsuario'} type={'button'} title={'Fechar modal'} onClick={toogleModalUsuario}>
                        <FontAwesomeIcon icon={faTimes} color={'#000'} style={{fontSize: 18, color: '#999', fontWeight: 100}} />  
                    </button>
                    
                    <div className={'containerFotoModalUsuario'}>
                        <div className={'fotoModalUsuario'}>
                            <FontAwesomeIcon icon={faUser} color={'#4682B4'} size={'5x'} />
                        </div>

                        <button id={'btnEditarFotoUsuario'} type={'button'} title={'Alterar foto'} onClick={()=> console.log('Ação de editar foto')}>
                            <FontAwesomeIcon icon={faPen} color={'#5D4037'} size={'lg'} />
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
                        <button id={'btnSair'} type={'button'} title={'Sair do sistema'} onClick={sairSistema}>Sair</button>
                    </div>

            </div>
        </div>
    );
}