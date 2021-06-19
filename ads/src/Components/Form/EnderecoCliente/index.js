import React, {useState, useEffect} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import Endereco from '../Endereco';
import { enderecoDefault } from '../../../Helper/ObjetoDefault';
import { atualizarEndereco } from '../../../Helper/Firebase/Endereco';

export default function EnderecoCliente() {
    const {uidCliente} = useParams();
    const history = useHistory();
    const ehNovoCliente = !uidCliente;
    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;

    const [endereco, setEndereco] = useState(null);


    useEffect(()=> {
        let enderecoCache = window.sessionStorage.getItem('endereco_cliente');
        let enderecoCacheJSON = enderecoCache ? JSON.parse(enderecoCache) : enderecoDefault;

        setEndereco(enderecoCacheJSON);
    }, []);

    function adicionarOuAtualizar() {
        
        if(ehNovoCliente){
            console.log('endereço do cliente adicionado com sucesso');
            history.goBack();
        } else{
            atualizarEndereco('endereco_cliente', endereco, history)
        }

        console.log('====================================');
        console.log('endereço cliente => ', endereco);
        console.log('====================================');

    }


    const btnAdd = (
        <button className={'btnSubmit'} type={'button'} title={`${ehNovoCliente ? 'Adicionar' : 'Atualizar'}`} onClick={adicionarOuAtualizar}>
             {`${ehNovoCliente ? 'Adicionar' : 'Atualizar'}`}
        </button>
    );

    return(
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ ehNovoCliente ? 'Novo' : 'Editar' }</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Endereço</span>
            </div>

            <fieldset className={'formulario'}>
                <legend align={'center'} className={'formulario'}>{ ehNovoCliente ? 'Novo': 'Editar' } Endereço Cliente</legend>
                
                { endereco && <Endereco endereco={endereco} setEndereco={setEndereco} btnAdd={btnAdd} /> }
                
            </fieldset>
        </div>
    );
}