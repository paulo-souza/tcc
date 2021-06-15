import React, { useState, useEffect, createContext, useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import clienteDefault, {creditoDefault} from '../../Helper/ObjetoDefault';
import getClientes from '../../Helper/Firebase/Cliente';
import getPessoasFisica from '../../Helper/Firebase/PessoaFisica';
import getContatos from '../../Helper/Firebase/Contato';
import getEnderecos from '../../Helper/Firebase/Endereco';
import getCreditos from '../../Helper/Firebase/Credito';
import getDetalheCreditos from '../../Helper/Firebase/DetalheCredito';

export const ClienteContext = createContext({});

/*eslint-disable */
export default function ClienteProvider({children}) {
    const {setEstaCarregando} = useContext(AuthContext);

    const [clientes, setClientes] = useState(new Map());
    const [todosSocios, setTodosSocios] = useState(new Map());
    const [avalistas, setAvalistas] = useState(new Map());
    const [todosCreditos, setTodosCreditos] = useState(new Map());
    const [socios, setSocios] = useState([]);
    const [contatoClientes, setContatoClientes] = useState([]);
    const [contatoAvalistas, setContatoAvalistas] = useState([]);
    const [enderecoClientes, setEnderecoClientes] = useState([]);
    const [enderecoAvalistas, setEnderecoAvalistas] = useState([]);
    const [detalheCreditos, setDetalheCreditos] = useState([]);
    const [cliente, setCliente] = useState(clienteDefault);
    const [credito, setCredito] = useState(creditoDefault);


    useEffect(()=> {        
        
        setEstaCarregando(true);

        getClientes(setClientes);
        getPessoasFisica('socio', setTodosSocios);
        getPessoasFisica('avalista', setAvalistas);
        getContatos('contato_cliente', setContatoClientes);
        getContatos('contato_avalista', setContatoAvalistas);
        getEnderecos('endereco_cliente', setEnderecoClientes);
        getEnderecos('endereco_avalista', setEnderecoAvalistas);
        getCreditos(setTodosCreditos);
        getDetalheCreditos(setDetalheCreditos, setEstaCarregando);

    }, []);


    return(
        <ClienteContext.Provider value={{ todosSocios, avalistas, credito, 
            clientes, socios, cliente, enderecoClientes, enderecoAvalistas,
            contatoClientes, contatoAvalistas, todosCreditos,
            setAvalistas, setClientes, setCredito, setSocios, setCliente}}>
            {children}
        </ClienteContext.Provider>
    )

}