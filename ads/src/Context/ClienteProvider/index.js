import React, { useState, useEffect, createContext, useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import getClientes from '../../Helper/Firebase/Cliente';
import getPessoasFisica from '../../Helper/Firebase/PessoaFisica';
import getDetalheCreditos from '../../Helper/Firebase/DetalheCredito';

export const ClienteContext = createContext({});

/*eslint-disable */
export default function ClienteProvider({children}) {
    const {setEstaCarregando} = useContext(AuthContext);
    
    const [todosClientes, setTodosClientes] = useState(new Map());
    const [clientes, setClientes] = useState([]);
    
    useEffect(()=> {        
        setEstaCarregando(true);

        getClientes(setTodosClientes, setClientes, setEstaCarregando);
        
    }, []);

    return(
        <ClienteContext.Provider value={{ todosClientes, clientes, setClientes }}>
            {children}
        </ClienteContext.Provider>
    )

}