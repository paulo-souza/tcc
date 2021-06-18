import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { contatoDefault } from '../../Helper/ObjetoDefault';

const styles = {
  email: {
    marginLeft: 75,
    marginBottom: 20,
    marginTop: 5
  },
  telefone: {
    marginLeft: 95,
    marginBottom: 20,
    marginTop: 5
  },
  celular: {
    marginLeft: 92,
    marginBottom: 20,
    marginTop: 5
  }
};


export default function ContatoCliente() {
    const [contato, setContato] = useState(contatoDefault);
    
    useEffect(()=> {
      let contatoCache = window.sessionStorage.getItem('contato_cliente');
      let contatoCacheJSON = contatoCache ? JSON.parse(contatoCache) : contatoDefault;
      setContato(contatoCacheJSON);
    },[])

    const btnContato = (
        contato.uid ?  <Link className={'btnEditar'} to={`/Clientes/Editar/${contato.uid}/Contato`} title={'Editar contato'}>Editar</Link>
        :
        <Link className={'btnNovoCliente'} to={'/Clientes/Novo/Contato'} title={'Novo contato'}>Novo</Link>
    );

    const formateNumeroTelefone = useCallback(numero => {
        return numero.replace(/\D/g,"")           
                .replace(/^(\d{2})(\d)/g,"($1) $2")
                .replace(/(\d)(\d{4})$/,"$1-$2"); 
    },[contato]);

  
    return(
        <section id={'section3'}>
            <input type={'radio'} name={'sections'} id={'option3'} />
            <label className={'labelTabs'} htmlFor={'option3'}>Contato</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Contato do Cliente*</h3>
                    { btnContato }              
                </div>
                <hr />

                {
                    contato.uid &&
                    <div className={'containerVisualizarCampos'}>
                        <span><strong>E-mail(s):</strong> {contato.email1}</span>
                        <span style={styles.email}>{contato.email2}</span>
                        <span><strong>Telefone(s):</strong> {formateNumeroTelefone(contato.telefone1)}</span>
                        <span style={styles.telefone}>{formateNumeroTelefone(contato.telefone2)}</span>
                        <span><strong>Celular(es):</strong> {formateNumeroTelefone(contato.celular1)}</span>
                        <span style={styles.celular}>{formateNumeroTelefone(contato.celular2)} </span>
                    </div>
                }


                { contato.uid && <hr /> }
            </article>
        </section>
    );
}