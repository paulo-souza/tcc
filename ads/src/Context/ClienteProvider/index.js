import React, { useState, createContext } from 'react';

export const ClienteContext = createContext({});

/*eslint-disable */
export default function ClienteProvider({children}) {
    const[socios, setSocios] = useState([]);
    const[avalistas, setAvalistas] = useState([]);
    
    const clienteDefault = {
        uid: '',
        data_registro: '',
        razao_social: '',
        nome_fantasia: '',
        cnae: '',
        cnpj: '',
        inscricao_municipal: '',
        inscricao_estadual: '',
        natureza_juridica: 'Ltda',
        porte_empresa: 'ME',
        situacao_empresa: 'ativo'
    };
    
    const[cliente, setCliente] = useState(clienteDefault);
    
    return(
        <ClienteContext.Provider value={{cliente, socios, avalistas, clienteDefault,
            setCliente, setSocios, setAvalistas}}>
            {children}
        </ClienteContext.Provider>
    )

}