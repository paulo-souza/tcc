import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import '../../Css/EsqueciMinhaSenha.css';
import BtnVoltar from '../../Components/BtnVoltar';

/*eslint-disable */
export default function EsqueciMinhaSenha() {
    const { container } = useContext(AuthContext);
    const [email, setEmail] = useState('');
   
    return(
        <div style={container}>
            <nav className={'reset_senha_nav'}>
                <BtnVoltar path={'/'} />
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