import React from 'react';

export default function AvalistasDeCliente(props) {
    return (
        <section id={'section5'}>
            <input type={'radio'} name={'sections'} id={'option5'} />
            <label className={'labelTabs'} htmlFor={'option5'}>Avalistas</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Avalistas*</h3>
                    <button className={'btnNovoCliente'} title={'Novo avalista'} type={'button'}>Novo</button>
                </div>

                <hr />

                <div className={'containerCliente'}>
                    <a href={'#'}>Fulano de Tal</a>
                    <a href={'#'}>Beltrano de Tal</a>
                    <a href={'#'}>Cicrano de Tal</a>
                </div>

                <hr />
            </article>
        </section>
    );
}