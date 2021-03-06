import React, { useEffect, useCallback, useState, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, useHistory } from 'react-router-dom';
import clienteDefault from '../../../Helper/ObjetoDefault';
import { atualizarCliente, salvarCliente } from '../../../Helper/Firebase/Cliente';
import Loading from '../../Loading';


export default function PessoaJuridica() {
    const { estaCarregando, setEstaCarregando } = useContext(AuthContext);
    const [cliente, setCliente] = useState(clienteDefault);
    const history = useHistory();
   
    const pathSubNivel = !cliente.uid ? '/Clientes/Novo' : `/Clientes/Editar/${cliente.uid}`;    
    
    useEffect(()=> {
        let clienteCache = window.sessionStorage.getItem('cliente');
        let clienteCacheJSON = clienteCache ? JSON.parse(clienteCache) : clienteDefault;

        setCliente(clienteCacheJSON);
    },[]);
    

    const ajustaCliente = useCallback(event=> {
        const { name, value } = event.target; 

        cliente[name] = value;
        setCliente({...cliente});
    },[cliente]);

   async function salvarOuAtualizar(event) {                     
       //TODO Emitir mensagen de  salvo ou editado c/ sucesso.

        if(!cliente.uid) {
            setEstaCarregando(true);
            console.log('salvando...');
            delete cliente['uid'];
            let uidNovoCliente = await salvarCliente(cliente);
                       
            
            window.sessionStorage.setItem('uidNovoCliente', JSON.stringify(uidNovoCliente));
            setEstaCarregando(false);
            history.goBack();
            

        } else{            
            window.sessionStorage.setItem('cliente', JSON.stringify(cliente));
            atualizarCliente(cliente, history);
        }
      
    }

    return(
        <div>
            { estaCarregando && <Loading /> }
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ !cliente.uid ? 'Novo' : 'Editar' }</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Pessoa Jur??dica</span>
            </div>

            <fieldset className={'formulario'}>
                <legend align={'center'} className={'formulario'}>{ !cliente.uid ? 'Novo Cliente' : 'Editar Cliente' }</legend>
                
                <div>
                    <label htmlFor={'situacao_empresa'}>Situa????o da empresa*</label>              
                </div>
                <select name={'situacao_empresa'} id={'situacao_empresa'} 
                    value={cliente.situacao_empresa} onChange={ajustaCliente}>
                    <option value={'ativo'}>Ativo</option>
                    <option value={'inativo'}>Inativo</option>                    
                </select>

                <label htmlFor={'data_registro'}>Data registro*</label>
                <input id={'data_registro'} name={'data_registro'} value={cliente.data_registro}
                    type={'date'} onChange={ajustaCliente} />

                <label htmlFor={'razao_social'}>Raz??o Social*</label>
                <input id={'razao_social'} name={'razao_social'} value={cliente.razao_social}
                    type={'text'} placeholder={'Raz??o Social'}  onChange={ajustaCliente} />

                <label htmlFor={'nome_fantasia'}>Nome fantasia</label>
                <input id={'nome_fantasia'} name={'nome_fantasia'} value={cliente.nome_fantasia}
                    type={'text'} placeholder={'Nome fantasia'} onChange={ajustaCliente} />

                <div>
                    <label htmlFor={'natureza_juridica'}>Natureza jur??dica*</label>
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

                <label htmlFor={'inscricao_municipal'}>Inscri????o Municipal*</label>
                <input id={'inscricao_municipal'} name={'inscricao_municipal'} value={cliente.inscricao_municipal}
                    type={'text'} placeholder={'Inscri????o Municipal'} onChange={ajustaCliente} maxLength={11} />

                <label htmlFor={'inscricao_estadual'}>Inscri????o Estadual</label>
                <input id={'inscricao_estadual'} name={'inscricao_estadual'} value={cliente.inscricao_estadual}
                    type={'text'} placeholder={'Inscri????o Estadual'} onChange={ajustaCliente} maxLength={11} />

                <button className={'btnSubmit'} title={`${!cliente.uid ? 'Adicionar' : 'Atualizar'} cliente`} type={'button'} onClick={salvarOuAtualizar}>
                    {`${!cliente.uid ? 'Adicionar' : 'Atualizar'}`}
                </button>
            </fieldset>
        </div>
    );
}