import React, { createContext, useState } from 'react';
import SignIn from '../../Helper/Firebase/SignIn';

export const AuthContext = createContext({});

/*eslint-disable */
export default function AutProvider({children}) {
    const [usuario, setUsuario] = useState(null);
    const [abrirModalUsuario, setAbrirModalUsuario] = useState(false);

    const container = {
        display: '-moz-flex',
        display: '-webkit-flex',
        display: '-ms-flex',
        display: 'flex',
        flexDirection: 'column',
        height: `${window.innerHeight}px`,  
        backgroundColor: '#F5FFFA',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const toogleModalUsuario = ()=>  setAbrirModalUsuario(!abrirModalUsuario);

    function acessarSistema(email, senha) {
        SignIn({ email, senha, setUsuario });
    }

    return(
        <AuthContext.Provider value={{estaLogado: !!usuario, usuario,
            abrirModalUsuario, container, 
            acessarSistema, toogleModalUsuario}}>
            {children}
        </AuthContext.Provider>
    );
}