import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

export default function Socio(props) {
    const {uidSocio, uidCliente} = useParams();
    const ehNovoCliente = !uidSocio && !uidCliente;
    const ehNovoSocio = ehNovoCliente || (uidCliente && !uidSocio);

    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;
    const history = useHistory();

    function salvarCliente() {
        history.goBack();
    }

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

                <label htmlFor={'nome'}>Nome completo*</label>
                <input id={'nome'} name={'nome'} value={''}
                    type={'text'} placeholder={'Nome completo'}  />

                <label htmlFor={'data_nascimento'}>Data nascimento*</label>
                <input id={'data_nascimento'} name={'data_nascimento'} value={''} type={'date'} />
                
                <label htmlFor={'uf_nascimento'}>Estado nascimento*</label>
                <input id={'uf_nascimento'} name={'uf_nascimento'} 
                    type={'text'} placeholder={'Estado nascimento'} value={''} type={'text'}  />

                <label htmlFor={'naturalidade'}>Naturalidade*</label>
                <input id={'naturalidade'} name={'naturalidade'} value={''} type={'text'} placeholder={'Naturalidade'} />

                <div>
                    <label htmlFor={'sexo'}>Sexo*</label>
                </div>
                <select name={'sexo'} id={'sexo'} value={''}>
                    <option value={''}>Selecione...</option>
                    <option value={'F'}>Feminino</option>
                    <option value={'M'}>Masculino</option>                    
                </select>

                <div>
                    <label htmlFor={'estado_civil'}>Estado civil*</label>
                </div>
                <select name={'estado_civil'} id={'estado_civil'} value={''}>
                    <option value={''}>Selecione o seu estado civil</option>
                    <option value={'solteiro'}>Solteiro(a)</option>
                    <option value={'casado'}>Casado(a)</option>
                    <option value={'separado'}>Separado(a)</option>                    
                    <option value={'divorciado'}>Divorciado(a)</option>                    
                    <option value={'viuvo'}>Viúvo(a)</option>                    
                </select>

                <label htmlFor={'conjuge'}>Nome do cônjuge</label>
                <input id={'conjuge'} name={'conjuge'} value={''} type={'text'} placeholder={'Nome completo'} />
                
                <label htmlFor={'cpf'}>CPF*</label>
                <input id={'cpf'} name={'cpf'} value={''} type={'text'} placeholder={'CPF'} />

                <label htmlFor={'rg'}>RG*</label>
                <input id={'rg'} name={'rg'} value={''} type={'text'} placeholder={'Registro Geral'} />
                
                <label htmlFor={'rg'}>RG*</label>
                <input id={'rg'} name={'rg'} value={''} type={'text'} placeholder={'Registro Geral'} />

                <label htmlFor={'orgao_expedidor'}>Orgão Exp.</label>
                <input id={'orgao_expedidor'} name={'orgao_expedidor'} value={''} type={'text'} placeholder={'Ex.: SSP, DGPC ...'} />

                <div>
                    <label htmlFor={'uf_expedidor'}>UF Exp.</label>
                </div>
                <select name={'uf_expedidor'} id={'uf_expedidor'} value={''}>
                    <option value={'AM'}>AM</option>
                    <option value={'AP'}>AP</option>
                    <option value={'GO'}>GO</option>                    
                    <option value={'SP'}>SP</option>                    
                    <option value={'RJ'}>RJ</option>                    
                </select>

                <label htmlFor={'mae'}>Nome da Mãe*</label>
                <input id={'mae'} name={'mae'} value={''} type={'text'} placeholder={'Nome completo'} />
                
                <label htmlFor={'pai'}>Nome do Pai</label>
                <input id={'pai'} name={'pai'} value={''} type={'text'} placeholder={'Nome completo'} />

                <button className={'btnSubmit'} type={'button'} onClick={salvarCliente}>Salvar</button>

            </fieldset>
        </div>
    );
}