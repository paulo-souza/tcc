import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clienteDefault from '../../Helper/ObjetoDefault';
import SaoIguais from '../../Helper/Utilidades/SaoIguais';


export default function PJMaisSocios() {

    const [cliente, setCliente] = useState(clienteDefault);
    const [socios, setSocios] = useState([]);

    const existeSocios = socios.length > 0;
    const pathNovoSocio = cliente.uid ? `/Clientes/Editar/${cliente.uid}/Socio` : '/Clientes/Novo/Socio'; 
    const pathEditarPJ = !SaoIguais(cliente, clienteDefault) && !cliente.uid ? '/Clientes/Novo/PessoaJuridica' : `/Clientes/Editar/${cliente.uid}/PessoaJuridica`;

    
    useEffect(()=> {
        let clienteCache = window.sessionStorage.getItem('cliente');
        let clienteCacheJSON = clienteCache ? JSON.parse(clienteCache) : clienteDefault;
        setCliente(clienteCacheJSON);

        let sociosCache = window.sessionStorage.getItem('socio');
        let sociosCacheJSON = sociosCache ? JSON.parse(sociosCache) : [];
        setSocios(sociosCacheJSON);

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
                                    <Link key={socio.uid} to={`/Clientes/Editar/${cliente.uid}/Socio/${socio.uid}`}>
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