import React, { useState } from 'react';
import '../../Css/EsqueciMinhaSenha.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function EsqueciMinhaSenha() {
    const [email, setEmail] = useState('');

    const altura = window.innerHeight;
    
    const container = {
        display: '-moz-flex',
        display: '-webkit-flex',
        display: '-ms-flex',
        display: 'flex',
        flexDirection: 'column',
        height: `${altura}px`,  
        backgroundColor: '#F5FFFA',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return(
        <div style={container}>
            <nav className={'reset_senha_nav'}>
                <button id={'btnVoltar'} name={'btnVoltar'} type={'button'} onClick={()=> console.log('Clicou no botão voltar!!!')}>
                    <FontAwesomeIcon icon={faArrowLeft} color={'#000'} size={'lg'} />
                </button>

                <span id={'reset_senha_txt_voltar'}>Voltar</span>
            </nav>

            <div className={'reset_senha_body'}>

                <div id={'reset_senha_bg'}>
                    <h3 id={'reset_senha_h3'}>Reset sua senha</h3>

                    <label>E-mail</label>
                    <input name={'email'} value={email} type={'email'} placeholder={'E-mail'}
                        autoFocus={true} onChange={e => setEmail(e.target.value) } />

                    <button id={'reset_senha_button'} type={'button'} onClick={()=> console.log('Clicou no botão Enviar!!!')}>
                        Enviar
                    </button>
                </div>

            </div>
        </div>
    );
}