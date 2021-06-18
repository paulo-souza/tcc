import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { contatoDefault } from '../../../Helper/ObjetoDefault';
import Contato from '../Contato';

export default function ContatoCliente(props) {
    const history = useHistory();
    const { uidCliente } = useParams();
    const ehNovoCliente = !uidCliente;
    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;

    const [contato, setContato] = useState(null);


    useEffect(()=> {
        let contatoCache = window.sessionStorage.getItem('contato_cliente');
        let contatoCacheJSON = contatoCache ? JSON.parse(contatoCache) : contatoDefault;

        setContato(contatoCacheJSON);
    }, [])


    function adicionarOuAtualizar() {
        
        if(contato.uid){
            console.log('contato do cliente adicionado com sucesso!');
        } else{
            console.log('contato do cliente atualizado com sucesso!');
        }

        console.log('====================================');
        console.log('contato cliente => ', contato);
        console.log('====================================');

        history.goBack();
    }

    const btnAdd = (
        <button className={'btnSubmit'} type={'button'} title={`${ehNovoCliente ? 'Atualizar' : 'Adicionar'}`} onClick={adicionarOuAtualizar}>
             {`${ehNovoCliente ? 'Adicionar' : 'Atualizar'}`}
        </button>
    );

    return (
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ehNovoCliente ? 'Novo' : 'Editar'}</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Contato</span>
            </div>

            <fieldset className={'formulario'}>
                <legend align={'center'} className={'formulario'}>{ehNovoCliente ? 'Novo Contato Cliente' : 'Editar Contato Cliente'}</legend>

                {contato && <Contato contato={contato} btnAdd={btnAdd} />}

            </fieldset>
        </div>
    );
}