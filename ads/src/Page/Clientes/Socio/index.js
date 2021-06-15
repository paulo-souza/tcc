import React, { useContext } from 'react';
import { ClienteContext } from '../../../Context/ClienteProvider';
import { useParams, useHistory, Link } from 'react-router-dom';
import { pessoaFisicaDefault } from '../../../Helper/ObjetoDefault';
import PessoaFisica from '../../../Components/PessoaFisica';


export default function Socio(props) {
    const {uidSocio, uidCliente} = useParams();
    const ehNovoCliente = !uidSocio && !uidCliente;
    const ehNovoSocio = ehNovoCliente || (uidCliente && !uidSocio);

    const { socios, setSocios } = useContext(ClienteContext);
    const socio = (!ehNovoSocio && uidSocio) ? socios.find(s=> s.uid === uidSocio) : pessoaFisicaDefault;

    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;
    const history = useHistory();
 

    function salvarCliente() {

        if(ehNovoCliente) {
            socio.uid = socios.length + 1;
            setSocios([...socios, socio]);
        } else{
            setSocios([...socios.filter(s=> s.uid !== socio.uid), socio]);
        }

        history.goBack();
    }

    console.log('socio=> ', socio);

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
                
                <PessoaFisica button={btnAddSocio} pessoa={socio} />
                
            </fieldset>
        </div>
    );
}