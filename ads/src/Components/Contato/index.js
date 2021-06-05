import React from 'react';

export default function Contato(props) {
    return(
        <section id={'section3'}>
            <input type={'radio'} name={'sections'} id={'option3'} />
            <label className={'labelTabs'} htmlFor={'option3'}>Contato</label>

            <article>

                <label htmlFor={'email1'}>E-mail1*</label>
                <input id={'email1'} name={'email1'} value={''} type={'email'} placeholder={'E-mail obrigatório'}  />
            
                <label htmlFor={'email2'}>E-mail2</label>
                <input id={'email2'} name={'email2'} value={''} type={'email'} placeholder={'E-mail opcional'}  />

                <label htmlFor={'telefone1'}>Telefone1*</label>
                <input id={'telefone1'} name={'telefone1'} value={''} type={'tel'} placeholder={'Número de telefone obrigatório'}  />
                
                <label htmlFor={'telefone2'}>Telefone2</label>
                <input id={'telefone2'} name={'telefone2'} value={''} type={'tel'} placeholder={'Número de telefone opcional'}  />
                
                <label htmlFor={'celular1'}>Celular1*</label>
                <input id={'celular1'} name={'celular1'} value={''} type={'tel'} placeholder={'Número de celular obrigatório'}  />
                
                <label htmlFor={'celular2'}>Celular2</label>
                <input id={'celular2'} name={'celular2'} value={''} type={'tel'} placeholder={'Número de celular opcional'}  />
                

            </article>
        </section>
    );
}