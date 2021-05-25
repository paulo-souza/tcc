import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import '../../Css/SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

/*eslint-disable */
export default function SignIn() {
    
    const { acessarSistema, container } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return (
        <div style={container}>            
            <div id={'signin_background'}>

                <div className={'signin_container'}>
                    <FontAwesomeIcon icon={faUserCircle} color={'#4F4F4F'} size={'6x'} />

                    <h3 id={'signin_h3'}>Acessar sistema</h3>
                </div>
                
                <hr className={'signin_hr'} />

                <br />

                <label>E-mail</label>
                <input name={'email'} value={email} type={'email'} placeholder={'E-mail'}
                    autoFocus={true} onChange={e => setEmail(e.target.value) } />

                <label>Senha</label>
                <input name={'senha'} value={senha} type={'password'}
                    placeholder={'Senha'} onChange={e => setSenha(e.target.value)} />
                
                <button type={'button'} id={'signin_button'} onClick={()=> acessarSistema(email, senha)}>Entrar</button>

                <div className={'signin_container'}> 
                    <Link to={'/EsqueciMinhaSenha'}>Esqueci minha senha</Link>                   
                </div>

                <hr className={'signin_hr'}/>                
                
            </div>    
              
        </div>      
    );
}