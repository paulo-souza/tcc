import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PessoaJuridica(props) {
    const {uid} = useParams();
    let pathSubNivel = uid ? `/Clientes/Editar/${uid}` : '/Clientes/Novo';

    return(
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ uid ? 'Editar' : 'Novo' }</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Pessoa Jurídica</span>
            </div>
        </div>
    );
}