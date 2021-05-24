import React, { createContext, useState } from 'react';
import SignIn from '../../Helper/Firebase/SignIn';

export const AuthContext = createContext({});

export default function AutProvider({children}) {
    const [usuario, setUsuario] = useState(null);
    
    function acessarSistema(email, senha) {
        SignIn({ email, senha, setUsuario });
    }

    return(
        <AuthContext.Provider value={{estaLogado: !!usuario, usuario, acessarSistema}}>
            {children}
        </AuthContext.Provider>
    );
}