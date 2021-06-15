import React, { useState, useEffect, createContext, useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import getClientes from '../../Helper/Firebase/Cliente';
import getPessoasFisica from '../../Helper/Firebase/PessoaFisica';
import getContatos from '../../Helper/Firebase/Contato';
import getEnderecos from '../../Helper/Firebase/Endereco';
import getCreditos from '../../Helper/Firebase/Credito';
import getDetalheCreditos from '../../Helper/Firebase/DetalheCredito';

export const ClienteContext = createContext({});

/*eslint-disable */
export default function ClienteProvider({children}) {
    const {estaCarregando, setEstaCarregando} = useContext(AuthContext);

    const [clientes, setClientes] = useState(new Map());
    const [todosSocios, setTodosSocios] = useState(new Map());
    const [avalistas, setAvalistas] = useState(new Map());
    const [socios, setSocios] = useState([]);
    const [contatoClientes, setContatoClientes] = useState([]);
    const [contatoAvalistas, setContatoAvalistas] = useState([]);
    const [enderecoClientes, setEnderecoClientes] = useState([]);
    const [enderecoAvalistas, setEnderecoAvalistas] = useState([]);
    const [creditos, setCreditos] = useState([]);
    const [detalheCreditos, setDetalheCreditos] = useState([]);
    

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
    
    const enderecoDefault = {
        uid: '',
        imovel_proprio: false,
        cep: '',
        uf: '',
        cidade: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        numero: '',
    };

    const contatoDefault = {
        uid: '',
        email1: '',
        email2: '',
        telefone1: '',
        telefone2: '',
        celular1: '',
        celular2: ''
    }
    
    const [cliente, setCliente] = useState(clienteDefault);
    const[credito, setCredito] = useState(creditoDefault);


    useEffect(()=> {        
        
        setEstaCarregando(true);

        getClientes(setClientes);
        getPessoasFisica('socio', setTodosSocios);
        getPessoasFisica('avalista', setAvalistas);
        getContatos('contato_cliente', setContatoClientes);
        getContatos('contato_avalista', setContatoAvalistas);
        getEnderecos('endereco_cliente', setEnderecoClientes);
        getEnderecos('endereco_avalista', setEnderecoAvalistas);
        getCreditos(setCreditos);
        getDetalheCreditos(setDetalheCreditos, setEstaCarregando);

    }, []);


    return(
        <ClienteContext.Provider value={{ todosSocios, avalistas, clienteDefault,
            credito, creditoDefault, clientes, socios, cliente,
            enderecoDefault, enderecoClientes, enderecoAvalistas,
            contatoDefault, contatoClientes, contatoAvalistas,
            setAvalistas, setClientes, setCredito, setSocios, setCliente}}>
            {children}
        </ClienteContext.Provider>
    )

}