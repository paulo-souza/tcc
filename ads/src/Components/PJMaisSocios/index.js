import React from 'react';
import { Link } from 'react-router-dom';


export default function PJMaisSocios(props) {
    const existeSocios =  props.socios.length > 0;
    const pathNovoSocio = props.uidCliente ? `/Clientes/Editar/${props.uidCliente}/Socio` : '/Clientes/Novo/Socio'; 

    return (
        <section id={'section1'}>
            <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
            <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Pessoa Jurídica*</h3>
                    {
                        !props.uidCliente &&
                        <Link className={'btnNovoCliente'} to={'/Clientes/Novo/PessoaJuridica'} title={'Novo cliente'}>Novo</Link>
                    }
                </div>

                <hr />

                { 
                    props.uidCliente &&
                    <div className={'containerCliente'}>
                        <Link to={`/Clientes/Editar/${props.uidCliente}/PessoaJuridica`}>Soluções Express</Link>
                    </div>
                }

                { props.uidCliente && <hr /> }

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
                                    <Link key={socio.uid} to={`/Clientes/Editar/${props.uidCliente}/Socio/${socio.uid}`}>
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