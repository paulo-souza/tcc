import React, { useCallback, useContext } from 'react';
import { ClienteContext } from '../../../Context/ClienteProvider';
import { useParams, Link, useHistory } from 'react-router-dom';

export default function PessoaJuridica(props) {
    
    const history = useHistory();
    const { cliente, setCliente } = useContext(ClienteContext);

    const {uidCliente} = useParams();
    const ehNovoCliente = !uidCliente;
    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;
    

    const ajustaCliente = useCallback(event=> {
        const { name, value } = event.target; 

        cliente[name] = value;
        setCliente({...cliente});
    },[cliente]);

    function salvarCliente(event) {
        //Falta implementar a função de editar
        // let dataFormatada = new Date(`${cliente.data_registro} 00:01:00`);
        // cliente.data_registro = dataFormatada.toLocaleDateString();

        setCliente({...cliente});        
       
        history.goBack();

    }

    return(
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ ehNovoCliente ? 'Novo' : 'Editar' }</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Pessoa Jurídica</span>
            </div>

            <fieldset className={'formulario'}>
                <legend align={'center'} className={'formulario'}>{ ehNovoCliente ? 'Novo Cliente' : 'Editar Cliente' }</legend>
                
                <div>
                    <label htmlFor={'situacao_empresa'}>Situação da empresa*</label>              
                </div>
                <select name={'situacao_empresa'} id={'situacao_empresa'} 
                    value={cliente.situacao_empresa} onChange={ajustaCliente}>
                    <option value={'ativo'}>Ativo</option>
                    <option value={'inativo'}>Inativo</option>                    
                </select>

                <label htmlFor={'data_registro'}>Data registro*</label>
                <input id={'data_registro'} name={'data_registro'} value={cliente.data_registro}
                    type={'date'} onChange={ajustaCliente} />

                <label htmlFor={'razao_social'}>Razão Social*</label>
                <input id={'razao_social'} name={'razao_social'} value={cliente.razao_social}
                    type={'text'} placeholder={'Razão Social'}  onChange={ajustaCliente} />

                <label htmlFor={'nome_fantasia'}>Nome fantasia</label>
                <input id={'nome_fantasia'} name={'nome_fantasia'} value={cliente.nome_fantasia}
                    type={'text'} placeholder={'Nome fantasia'} onChange={ajustaCliente} />

                <div>
                    <label htmlFor={'natureza_juridica'}>Natureza jurídica*</label>
                </div>
                <select name={'natureza_juridica'} id={'natureza_juridica'} 
                    value={cliente.natureza_juridica} onChange={ajustaCliente}>
                    <option value={'Ltda'}>Ltda</option>
                    <option value={'MEI'}>MEI</option>                    
                    <option value={'EI'}>EI</option>                    
                    <option value={'EIRELI'}>EIRELI</option>                    
                </select>

                <div>
                    <label htmlFor={'porte_empresa'}>Porte da empresa*</label>
                </div>
                <select name={'porte_empresa'} id={'porte_empresa'} 
                    value={cliente.porte_empresa} onChange={ajustaCliente}>
                    <option value={'ME'}>ME - Microempresa</option>
                    <option value={'EPP'}>EPP - Empresa de Pequeno Porte</option>                  
                </select>

                <label htmlFor={'cnae'}>CNAE*</label>
                <input id={'cnae'} name={'cnae'} value={cliente.cnae}
                    type={'text'} placeholder={'CNAE'} onChange={ajustaCliente} />

                <label htmlFor={'cnpj'}>CNPJ*</label>
                <input id={'cnpj'} name={'cnpj'} value={cliente.cnpj} maxLength={14}
                    type={'text'} placeholder={'CNPJ'} onChange={ajustaCliente} />

                <label htmlFor={'inscricao_municipal'}>Inscrição Municipal*</label>
                <input id={'inscricao_municipal'} name={'inscricao_municipal'} value={cliente.inscricao_municipal}
                    type={'text'} placeholder={'Inscrição Municipal'} onChange={ajustaCliente} maxLength={11} />

                <label htmlFor={'inscricao_estadual'}>Inscrição Estadual</label>
                <input id={'inscricao_estadual'} name={'inscricao_estadual'} value={cliente.inscricao_estadual}
                    type={'text'} placeholder={'Inscrição Estadual'} onChange={ajustaCliente} maxLength={11} />

                <button className={'btnSubmit'} type={'button'} onClick={salvarCliente}>Salvar</button>
            </fieldset>
        </div>
    );
}