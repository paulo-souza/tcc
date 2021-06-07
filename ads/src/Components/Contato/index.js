import React, { useCallback } from 'react';

export const ContatoDefault = {
    email1: '',
    email2: '',
    telefone1: '',
    telefone2: '',
    celular1: '',
    celular2: ''
}

export default function Contato(props) {

    const ajustaContato = useCallback(event=> {
        const { name, value } = event.target; 

        props.contato[name] = value;
        props.setContato({...props.contato});
    },[props.contato]);

    
    return(
        <section id={'section3'}>
            <input type={'radio'} name={'sections'} id={'option3'} />
            <label className={'labelTabs'} htmlFor={'option3'}>Contato</label>

            <article>

                <label htmlFor={'email1'}>E-mail1*</label>
                <input id={'email1'} name={'email1'} value={props.contato.email1} maxLength={254}
                    type={'email'} placeholder={'E-mail obrigatório'} onChange={ajustaContato} />
            
                <label htmlFor={'email2'}>E-mail2</label>
                <input id={'email2'} name={'email2'} value={props.contato.email2} maxLength={254}
                    type={'email'} placeholder={'E-mail opcional'} onChange={ajustaContato} />

                <label htmlFor={'telefone1'}>Telefone1*</label>
                <input id={'telefone1'} name={'telefone1'} value={props.contato.telefone1} maxLength={10}
                    type={'tel'} placeholder={'Número de telefone obrigatório'} onChange={ajustaContato} />
                
                <label htmlFor={'telefone2'}>Telefone2</label>
                <input id={'telefone2'} name={'telefone2'} value={props.contato.telefone2} maxLength={10}
                    type={'tel'} placeholder={'Número de telefone opcional'} onChange={ajustaContato} />
                
                <label htmlFor={'celular1'}>Celular1*</label>
                <input id={'celular1'} name={'celular1'} value={props.contato.celular1} maxLength={11}
                    type={'tel'} placeholder={'Número de celular obrigatório'} onChange={ajustaContato} />
                
                <label htmlFor={'celular2'}>Celular2</label>
                <input id={'celular2'} name={'celular2'} value={props.contato.celular2} maxLength={11}
                    type={'tel'} placeholder={'Número de celular opcional'} onChange={ajustaContato} />                

            </article>
        </section>
    );
}