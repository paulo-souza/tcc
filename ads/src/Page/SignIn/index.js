import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Css/SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

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
                
                <button type={'button'} id={'signin_button'} onClick={()=> alert(`email: ${email}\nsenha: ${senha}`)}>Entrar</button>

                <div className={'signin_container'}> 
                    <Link to={'/EsqueciMinhaSenha'}>Esqueci minha senha</Link>                   
                </div>

                <hr className={'signin_hr'}/>                
                
            </div>    
              
        </div>      
    );
}