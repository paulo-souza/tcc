import React from 'react';
import { Link } from 'react-router-dom';


export default function PJMaisSocios(props) {
    return (
        <section id={'section1'}>
            <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
            <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Pessoa Jurídica*</h3>
                    {
                        !props.uid &&
                        <Link className={'btnNovoCliente'} to={'/Clientes/Novo/PessoaJuridica'} title={'Novo cliente'}>Novo</Link>
                    }
                </div>

                <hr />

                { 
                    props.uid &&
                    <div className={'containerCliente'}>
                        <Link to={`/Clientes/Editar/${props.uid}/PessoaJuridica`}>Soluções Express</Link>
                    </div>
                }

                { props.uid && <hr /> }

                <hr id={'linhaSeparadoraCliente'} />

                <div className={'containerClienteSubTitulo'}>
                    <h3>Sócio(s)*</h3>
                    <button className={'btnNovoCliente'} title={'Novo sócio'} type={'button'}>Novo</button>
                </div>

                <hr />

                {
                    props.uid &&
                    <div className={'containerCliente'}>
                        <a href={'#'}>Vitor Emanuel da Mata</a>
                        <a href={'#'}>Mateus Marcos Vínicius Cavalcante</a>
                    </div>
                }

                { props.uid && <hr /> }
            </article>
        </section>
    );
}