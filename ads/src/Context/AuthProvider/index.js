import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AutProvider({children}) {
    const [usuario, setUsuario] = useState(null);

    return(
        <AuthContext.Provider value={{estaLogado: !!usuario, usuario}}>
            {children}
        </AuthContext.Provider>
    );
}