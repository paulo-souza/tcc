import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import PessoaFisica from '../../../Components/Form/PessoaFisica';
import { pessoaFisicaDefault } from '../../../Helper/ObjetoDefault';


export default function Socio(props) {
    const {uidSocio, uidCliente} = useParams();
    const history = useHistory();
    const ehNovoCliente = !uidSocio && !uidCliente;
    const ehNovoSocio = ehNovoCliente || (uidCliente && !uidSocio);

    const [socio, setSocio] = useState(null);
    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;
    
    useEffect(()=> {
        let sociosCache = window.sessionStorage.getItem('socio');
        let sociosCacheJSON = sociosCache && JSON.parse(sociosCache);
        let socioObtido = pessoaFisicaDefault;
        
        if(sociosCacheJSON) socioObtido = sociosCacheJSON.find(s=> s.uid === uidSocio);

        setSocio(socioObtido);
    }, []);

    function adicionarOuAtualizar() {
        
        if(ehNovoCliente){
            console.log('sócio adicionado com sucesso');
        } else{
            console.log('sócio atualizado com sucesso!');
        }

        console.log('====================================');
        console.log('socio => ', socio);
        console.log('====================================');

        history.goBack();
    }

    const btnAdd = (
        <button className={'btnSubmit'} type={'button'} title={`${!ehNovoSocio ? 'Atualizar' : 'Adicionar'}`} onClick={adicionarOuAtualizar}>
             {`${!ehNovoSocio ? 'Atualizar' : 'Adicionar'}`}
        </button>
    );

    return(
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ ehNovoCliente ? 'Novo' : 'Editar' }</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Sócio</span>
            </div>

            <fieldset className={'formulario'}>
                <legend align={'center'} className={'formulario'}>{ ehNovoSocio ? 'Novo sócio': 'Editar sócio' }</legend>
                
                { socio && <PessoaFisica pessoa={socio} setPessoa={setSocio} btnAdd={btnAdd} /> }
                
            </fieldset>
        </div>
    );
}