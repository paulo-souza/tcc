import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import PessoaFisica from '../../../Components/PessoaFisica';

export default function Socio(props) {
    const {uidSocio, uidCliente} = useParams();
    const ehNovoCliente = !uidSocio && !uidCliente;
    const ehNovoSocio = ehNovoCliente || (uidCliente && !uidSocio);

    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;
    const history = useHistory();

    function salvarCliente() {
        history.goBack();
    }

    const btnAddSocio = <button className={'btnSubmit'} type={'button'} onClick={salvarCliente}>Salvar</button>;

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
                
                <PessoaFisica button={btnAddSocio} />
                
            </fieldset>
        </div>
    );
}