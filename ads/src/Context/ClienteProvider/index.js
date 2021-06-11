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

    const creditoDefault = {
        uid: '',
        operacao_credito: 'emprestimo',
        tipo_juros: 'simples',
        valor_emprestimo: '',
        taxa_juros: '',
        prazo: 'mensal',
        qtd_prazo: ''
    }
    
    const[cliente, setCliente] = useState(clienteDefault);
    const[credito, setCredito] = useState(creditoDefault);

    return(
        <ClienteContext.Provider value={{cliente, socios, avalistas, 
            clienteDefault, credito, creditoDefault,
            setCliente, setSocios, setAvalistas,
            setCredito}}>
            {children}
        </ClienteContext.Provider>
    )

}