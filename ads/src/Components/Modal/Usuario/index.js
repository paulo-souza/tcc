import React, { useContext } from 'react';
import BtnFoto from '../../../Components/BtnFoto';
import { AuthContext } from '../../../Context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../../Css/ModalUsuario.css';

export default function ModalUsuario() {
    const { toogleModalUsuario, usuario, sairSistema } = useContext(AuthContext);

    return(
        <div className={'modalUsuario'}>
            <div className={'containerModalUsuario'}>
                    <button id={'btnFecharModalUsuario'} type={'button'} title={'Fechar modal'} onClick={toogleModalUsuario}>
                        <FontAwesomeIcon icon={faTimes} color={'#000'} style={{fontSize: 18, color: '#999', fontWeight: 100}} />  
                    </button>
                    
                    
                    <div id={'containerTxtModalUsuario'}>
                        <BtnFoto abrirPreVisualizacao={true} />
                        
                        <span id={'txtModalUsuarioNome'}>{usuario.nome}</span>
                        <span>{usuario.email}</span>
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