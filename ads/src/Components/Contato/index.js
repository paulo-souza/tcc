import React, { useState, useEffect, useCallback, useContext } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import {contatoDefault} from '../../Helper/ObjetoDefault';

export default function Contato(props) {

    const ehParaEditarContato = props.uid;
    const {contatoClientes, contatoAvalistas} = useContext(ClienteContext);
    const [contato, setContato] = useState(contatoDefault);

    useEffect(()=> {
        if(ehParaEditarContato) setContato(buscarContatoPeloTipoPessoa(props.tipoPessoa));
    }, []);

    const ajustaContato = useCallback(event=> {
        const { name, value } = event.target; 

        contato[name] = value;
        setContato({...contato});
    },[contato]);

    function buscarContatoPeloTipoPessoa(tipo) {
        const pessoas = {
            cliente: contatoClientes.find(contact=> contact.uid === props.uid),
            avalista: contatoAvalistas.find(contact=> contact.uid === props.uid)
        };

        return pessoas[tipo];
    }
    

    return(
        <section id={'section3'}>
            <input type={'radio'} name={'sections'} id={'option3'} />
            <label className={'labelTabs'} htmlFor={'option3'}>Contato</label>

            <article>

                <label htmlFor={'email1'}>E-mail1*</label>
                <input id={'email1'} name={'email1'} value={contato.email1} maxLength={254}
                    type={'email'} placeholder={'E-mail obrigatório'} onChange={ajustaContato} />
            
                <label htmlFor={'email2'}>E-mail2</label>
                <input id={'email2'} name={'email2'} value={contato.email2} maxLength={254}
                    type={'email'} placeholder={'E-mail opcional'} onChange={ajustaContato} />

                <label htmlFor={'telefone1'}>Telefone1*</label>
                <input id={'telefone1'} name={'telefone1'} value={contato.telefone1} maxLength={10}
                    type={'tel'} placeholder={'Número de telefone obrigatório'} onChange={ajustaContato} />
                
                <label htmlFor={'telefone2'}>Telefone2</label>
                <input id={'telefone2'} name={'telefone2'} value={contato.telefone2} maxLength={10}
                    type={'tel'} placeholder={'Número de telefone opcional'} onChange={ajustaContato} />
                
                <label htmlFor={'celular1'}>Celular1*</label>
                <input id={'celular1'} name={'celular1'} value={contato.celular1} maxLength={11}
                    type={'tel'} placeholder={'Número de celular obrigatório'} onChange={ajustaContato} />
                
                <label htmlFor={'celular2'}>Celular2</label>
                <input id={'celular2'} name={'celular2'} value={contato.celular2} maxLength={11}
                    type={'tel'} placeholder={'Número de celular opcional'} onChange={ajustaContato} />                

            </article>
        </section>
    );
}