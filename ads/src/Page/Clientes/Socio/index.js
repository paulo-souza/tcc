import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import PessoaFisica from '../../../Components/Form/PessoaFisica';
import { pessoaFisicaDefault } from '../../../Helper/ObjetoDefault';
import { atualizarPessoaFisica } from '../../../Helper/Firebase/PessoaFisica';

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
        
        if(ehNovoCliente && ehNovoSocio){
            console.log('sócio adicionado com sucesso');
            history.goBack();
        } else{
            
            let uf_expedidor = socio.rg.uf;
            delete socio.rg['uf'];
            socio.rg.uf_expedidor = uf_expedidor;

            let socioBD = {path: 'socio', uidCliente, pessoa: socio, history};
            atualizarPessoaFisica(socioBD);

            let sociosCache = JSON.parse(window.sessionStorage.getItem('socio'));
            sociosCache = sociosCache.filter(s=> s.uid !== socio.uid);
            sociosCache = [...sociosCache, socio];

            window.sessionStorage.setItem('socio', JSON.stringify(sociosCache));
        }

        console.log('====================================');
        console.log('socio => ', socio);
        console.log('====================================');

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