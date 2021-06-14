import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import BtnAdd from '../../Components/BtnAdd';
import { AuthContext } from '../../Context/AuthProvider';
import ModalUsuario from '../../Components/Modal/Usuario';
import TabelaCliente from '../../Components/TabelaCliente';


export default function Clientes() {
    const { container, abrirModalUsuario, estaCarregando } = useContext(AuthContext);
    const [buscarCliente, setBuscarCliente] = useState(null);


    return (
        <div style={container}>
            <Header title={'Clientes'} />           
               
            <div className={'body'}>
            
                { 
                    estaCarregando ? <Loading /> 
                    :  
                    <div className={'containerBuscarCliente'}>
                        <input id={'buscarCliente'} name={'buscarCliente'} value={buscarCliente} type={'search'}
                            placeholder={'Buscar cliente...'} onChange={e => setBuscarCliente(e.target.value)} />

                        <button style={{marginBottom: 10}} className={'btnBuscar'} type={'button'} title={'Buscar cliente'}
                            onClick={()=> console.log('hora de buscar um cliente')}>
                            <FontAwesomeIcon icon={faSearch} color={'#fff'} size={'1x'} />
                        </button>
                    </div>

                }

                 { !estaCarregando && <TabelaCliente /> }            
                
            </div>

            { abrirModalUsuario && <ModalUsuario />}

            <BtnAdd title={'Novo cliente'} path={'/Clientes/Novo'} />
            <Footer />
        </div>
    );

}