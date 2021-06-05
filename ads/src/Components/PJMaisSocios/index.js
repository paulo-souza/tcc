import React from 'react';

export default function PJMaisSocios(props) {
    return (
        <section id={'section1'}>
            <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
            <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Pessoa Jurídica*</h3>
                    <button className={'btnNovoCliente'} title={'Novo cliente'} type={'button'}>Novo</button>
                </div>

                <hr />

                <div className={'containerCliente'}>
                    <a href={'#'}>Soluções Express</a>
                </div>

                <hr />

                <hr id={'linhaSeparadoraCliente'} />

                <div className={'containerClienteSubTitulo'}>
                    <h3>Sócio(s)*</h3>
                    <button className={'btnNovoCliente'} title={'Novo sócio'} type={'button'}>Novo</button>
                </div>

                <hr />

                <div className={'containerCliente'}>
                    <a href={'#'}>Vitor Emanuel da Mata</a>
                    <a href={'#'}>Mateus Marcos Vínicius Cavalcante</a>
                </div>

                <hr />
            </article>
        </section>
    );
}