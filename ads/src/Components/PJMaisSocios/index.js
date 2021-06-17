import React from 'react';
import { Link } from 'react-router-dom';
import clienteDefault from '../../Helper/ObjetoDefault';
import SaoIguais from '../../Helper/Utilidades/SaoIguais';


export default function PJMaisSocios(props) {

    const existeSocios = props.socios.length > 0;
    const pathNovoSocio = props.cliente.uid ? `/Clientes/Editar/${props.cliente.uid}/Socio` : '/Clientes/Novo/Socio'; 
    const pathEditarPJ = !SaoIguais(props.cliente, clienteDefault) && !props.cliente.uid ? '/Clientes/Novo/PessoaJuridica' : `/Clientes/Editar/${props.cliente.uid}/PessoaJuridica`;

    
    return (
        <section id={'section1'}>
            <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
            <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Pessoa Jurídica*</h3>
                    {
                        SaoIguais(props.cliente, clienteDefault) &&
                        <Link className={'btnNovoCliente'} to={'/Clientes/Novo/PessoaJuridica'} title={'Novo cliente'}>Novo</Link>
                    }
                </div>

                <hr />

                { 
                    !SaoIguais(props.cliente, clienteDefault) &&
                    <div className={'containerCliente'}>
                        <Link to={pathEditarPJ}>{props.cliente.nome_fantasia}</Link>
                    </div>
                }

                { !SaoIguais(props.cliente, clienteDefault) && <hr /> }

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
                            props.socios.map(socio=> {
                                return(
                                    <Link key={socio.uid} to={`/Clientes/Editar/${props.cliente.uid}/Socio/${socio.uid}`}>
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