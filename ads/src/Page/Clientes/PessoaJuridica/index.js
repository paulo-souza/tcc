import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../../Css/PessoaJuridica.css';

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

            <fieldset className={'formulario'}>
                <legend align={'center'} className={'formulario'}>Cliente</legend>
                
                <div>
                    <label htmlFor={'situacao_empresa'}>Situação da empresa*</label>              
                </div>
                <select className={'pj'} name={'situacao_empresa'} id={'situacao_empresa'} value={''}>
                    <option value={'ativo'}>Ativo</option>
                    <option value={'inativo'}>Inativo</option>                    
                </select>

                <label htmlFor={'data_registro'}>Data registro*</label>
                <input className={'pj'} id={'data_registro'} name={'data_registro'} value={''} type={'date'} />

                <label htmlFor={'razao_social'}>Razão Social*</label>
                <input className={'pj'} id={'razao_social'} name={'razao_social'} value={''}
                    type={'text'} placeholder={'Razão Social'}  />

                <label htmlFor={'nome_fantasia'}>Nome fantasia</label>
                <input className={'pj'} id={'nome_fantasia'} name={'nome_fantasia'} value={''}
                    type={'text'} placeholder={'Nome fantasia'}  />

                <div>
                    <label htmlFor={'natureza_juridica'}>Natureza jurídica*</label>
                </div>
                <select className={'pj'} name={'natureza_juridica'} id={'natureza_juridica'} value={''}>
                    <option value={'Ltda'}>Ltda</option>
                    <option value={'MEI'}>MEI</option>                    
                    <option value={'EI'}>EI</option>                    
                    <option value={'EIRELI'}>EIRELI</option>                    
                </select>

                <div>
                    <label htmlFor={'porte_empresa'}>Porte da empresa*</label>
                </div>
                <select className={'pj'} name={'porte_empresa'} id={'porte_empresa'} value={''}>
                    <option value={'ME'}>ME - Microempresa</option>
                    <option value={'EPP'}>EPP - Empresa de Pequeno Porte</option>                  
                </select>

                <label htmlFor={'cnae'}>CNAE*</label>
                <input className={'pj'} id={'cnae'} name={'cnae'} value={''}
                    type={'text'} placeholder={'CNAE'}  />

                <label htmlFor={'cnpj'}>CNPJ*</label>
                <input className={'pj'} id={'cnpj'} name={'cnpj'} value={''}
                    type={'text'} placeholder={'CNPJ'}  />

                <label htmlFor={'inscricao_municipal'}>Inscrição Municipal*</label>
                <input className={'pj'} id={'inscricao_municipal'} name={'inscricao_municipal'} value={''}
                    type={'text'} placeholder={'Inscrição Municipal'}  />

                <label htmlFor={'inscricao_estadual'}>Inscrição Estadual</label>
                <input className={'pj'} id={'inscricao_estadual'} name={'inscricao_estadual'} value={''}
                    type={'text'} placeholder={'Inscrição Estadual'}  />

                <button className={'btnSalvarPJ'} type={'button'}>Salvar</button>
            </fieldset>
        </div>
    );
}