import React, { useState, useContext, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import BtnAdd from '../../Components/BtnAdd';
import { AuthContext } from '../../Context/AuthProvider';
import getClientes from '../../Helper/Firebase/Cliente';
import ModalUsuario from '../../Components/Modal/Usuario';
import TabelaCliente from '../../Components/TabelaCliente';
import ClienteNaoEncontrado from '../../Components/ClienteNaoEncontrado';


export default function Clientes() {
    const { container, 
        abrirModalUsuario, 
        estaCarregando, 
        setEstaCarregando, 
        busqueTodosEnderecoAvalista, 
        busqueTodosContatoAvalista } = useContext(AuthContext);
    const [clientes, setClientes] = useState([]);
    const [clientesView, setClientesView] = useState([]);
    const [buscarCliente, setBuscarCliente] = useState('');

    const carregueSessionStorageCliente = ()=> {
        window.sessionStorage.setItem('cliente', '');
        window.sessionStorage.setItem('socio', '');        
        window.sessionStorage.setItem('avalista', '');       
        window.sessionStorage.setItem('credito', '');
        window.sessionStorage.setItem('endereco_cliente', '');
        window.sessionStorage.setItem('endereco_avalista', '');
        window.sessionStorage.setItem('contato_cliente', '');
        window.sessionStorage.setItem('contato_avalista', '');
        window.sessionStorage.setItem('detalhes_credito', '');
    };

    useEffect(()=> {
        setEstaCarregando(true);
        carregueSessionStorageCliente();
        busqueTodosEnderecoAvalista();
        busqueTodosContatoAvalista();
        getClientes(setClientes, setClientesView, setEstaCarregando);        
    },[]);

    const pesquisarCliente = useCallback(()=> {
      let clientesObtidos =  clientes.filter(c=> c.nome_fantasia.toLowerCase() === buscarCliente?.toLocaleLowerCase() || c.cnpj == buscarCliente);
      if(!buscarCliente) clientesObtidos = clientes;
      setClientesView(clientesObtidos);
    }, [clientes, buscarCliente]);

    const voltarTodaListaDeClientes = useCallback(()=> {
        setClientesView(clientes);
        setBuscarCliente('');
    },[clientes, buscarCliente, clientesView]);

    const pesquisarUtilizandoEnter = (event)=> {
        if(event.key === 'Enter') pesquisarCliente();
    };

    let TabelaClienteView =  clientesView.length > 0  ? <TabelaCliente clientes={clientesView} /> : <ClienteNaoEncontrado action={voltarTodaListaDeClientes} />;
    
  
    return (
        <div style={container}>
            <Header title={'Clientes'} />           
               
            <div className={'body'}>
            
                { 
                    estaCarregando ? <Loading /> 
                    :  
                    <div className={'containerBuscarCliente'}>
                        <input id={'buscarCliente'} name={'buscarCliente'} value={buscarCliente} 
                            placeholder={'Buscar cliente...'} onKeyDown={pesquisarUtilizandoEnter} type={'search'}
                            onChange={e=> setBuscarCliente(e.target.value)} />

                        <button style={{marginBottom: 10}} className={'btnBuscar'} type={'button'} title={'Buscar cliente'}
                            onClick={pesquisarCliente}>
                            <FontAwesomeIcon icon={faSearch} color={'#fff'} size={'1x'} />
                        </button>
                    </div>

                }

                 { !estaCarregando &&  TabelaClienteView }            
                
            </div>

            { abrirModalUsuario && <ModalUsuario />}

            <BtnAdd title={'Novo cliente'} path={'/Clientes/Novo'} />
            <Footer />
        </div>
    );

}