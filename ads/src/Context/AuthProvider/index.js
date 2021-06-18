import React, { createContext, useState, useEffect } from 'react';
import SignIn from '../../Helper/Firebase/SignIn';
import SignOut from '../../Helper/Firebase/SignOut';
import { getAllEnderecosAvalistas } from '../../Helper/Firebase/Endereco';
import { getAllContatosAvalistas } from '../../Helper/Firebase/Contato';

export const AuthContext = createContext({});

/*eslint-disable */
export default function AutProvider({children}) {
    const [usuario, setUsuario] = useState(null);
    const [abrirModalUsuario, setAbrirModalUsuario] = useState(false);
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [todosEnderecoAvalista, setTodosEnderecoAvalista] = useState(new Map());
    const [todosContatoAvalista, setTodosContatoAvalista] = useState(new Map());

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

    useEffect(()=>{

        let usuarioAutentico = window.sessionStorage.getItem('usuario');

        if(usuarioAutentico) setUsuario(JSON.parse(usuarioAutentico));
        console.log('usuario =', usuarioAutentico);
    }, []);

    const toogleModalUsuario = ()=>  setAbrirModalUsuario(!abrirModalUsuario);

    function acessarSistema(email, senha) {
        SignIn({ email, senha, setUsuario, setEstaCarregando });
    }

    function sairSistema() {
        SignOut(setUsuario, setEstaCarregando, toogleModalUsuario);
    }

    function busqueTodosEnderecoAvalista() {
        getAllEnderecosAvalistas(setTodosEnderecoAvalista);
    }

    function busqueTodosContatoAvalista() {
        getAllContatosAvalistas(setTodosContatoAvalista);
    }

    return(
        <AuthContext.Provider value={{estaLogado: !!usuario, usuario, todosContatoAvalista,
            abrirModalUsuario, container, todosEnderecoAvalista, estaCarregando,
            acessarSistema, toogleModalUsuario, busqueTodosEnderecoAvalista,
            setEstaCarregando, sairSistema, busqueTodosContatoAvalista}}>
            {children}
        </AuthContext.Provider>
    );
}