import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import '../../Css/BtnFoto.css';

export default function BtnFoto({abrirPreVisualizacao}=false) {
    return(
        <div className={'containerFotoModalUsuario'}>
            <div className={'fotoModalUsuario'}>
                <FontAwesomeIcon icon={faUser} color={'#4682B4'} size={'5x'} />
            </div>

            {
                abrirPreVisualizacao ?
                <button id={'btnEditarFotoUsuario'} type={'button'} title={'Alterar foto'} onClick={()=> console.log('Ação de editar foto')}>
                    <FontAwesomeIcon icon={faPen} color={'#5D4037'} size={'lg'} />
                </button>
                :
                <span>Teste de botão</span>
            }

        </div>
    );
}