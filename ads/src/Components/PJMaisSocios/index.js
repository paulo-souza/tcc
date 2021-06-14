import React, { useState, useEffect, useContext } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import { Link } from 'react-router-dom';
import SaoIguais from '../../Utilidades/SaoIguais';


export default function PJMaisSocios({uidCliente}) {
    const {clienteDefault, clientes, socios: sociosMap} = useContext(ClienteContext);

    const[socios, setSocios] = useState([]);
    const[cliente, setCliente] = useState(clienteDefault);

    const ehParaEditar = uidCliente;
    const existeSocios = sociosMap.size > 0;
    const pathNovoSocio = uidCliente ? `/Clientes/Editar/${uidCliente}/Socio` : '/Clientes/Novo/Socio'; 
    const pathEditarPJ = !SaoIguais(cliente, clienteDefault) && !uidCliente ? '/Clientes/Novo/PessoaJuridica' : `/Clientes/Editar/${uidCliente}/PessoaJuridica`;

    useEffect(()=> {
        if(ehParaEditar && existeSocios) {
            setCliente(clientes.get(uidCliente));
            setSocios(sociosMap.get(uidCliente));
        }
    }, []);
 
    return (
        <section id={'section1'}>
            <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
            <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Pessoa Jurídica*</h3>
                    {
                        SaoIguais(cliente, clienteDefault) &&
                        <Link className={'btnNovoCliente'} to={'/Clientes/Novo/PessoaJuridica'} title={'Novo cliente'}>Novo</Link>
                    }
                </div>

                <hr />

                { 
                    !SaoIguais(cliente, clienteDefault) &&
                    <div className={'containerCliente'}>
                        <Link to={pathEditarPJ}>{cliente.nome_fantasia}</Link>
                    </div>
                }

                { !SaoIguais(cliente, clienteDefault) && <hr /> }

                <hr id={'linhaSeparadoraCliente'} />

                <div className={'containerClienteSubTitulo'}>
                    <h3>Sócio(s)*</h3>
                    <Link to={pathNovoSocio} className={'btnNovoCliente'} title={'Novo sócio'}>Novo</Link>
                </div>

                <hr />

                {
                    existeSocios &&
                    <div className={'containerCliente'}>
                        
                        {
                            socios.map(socio=> {
                                return(
                                    <Link key={socio.uid} to={`/Clientes/Editar/${uidCliente}/Socio/${socio.uid}`}>
                                        {socio.nome}
                                    </Link>
                                );
                            })
                        }
                    </div>
                }

                { existeSocios && <hr /> }
            </article>
        </section>
    );
}