import React, { useContext } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import { Link } from 'react-router-dom';
import SaoIguais from '../../Utilidades/SaoIguais';


export default function PJMaisSocios(props) {
    const {cliente, clienteDefault} = useContext(ClienteContext);

    const existeSocios =  props.socios.length > 0;
    const pathNovoSocio = props.uidCliente ? `/Clientes/Editar/${props.uidCliente}/Socio` : '/Clientes/Novo/Socio'; 
    const pathEditarPJ = !SaoIguais(cliente, clienteDefault) && !props.uidCliente ? '/Clientes/Novo/PessoaJuridica' : `/Clientes/Editar/${props.uidCliente}/PessoaJuridica`;


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