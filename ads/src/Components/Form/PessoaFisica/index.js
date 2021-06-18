import React, { useCallback } from 'react';
import UnidadeFederativa from '../../UnidadeFederativa';
import SomenteNumeros from '../../../Helper/Utilidades/SomenteNumeros';

const styleContainerRg = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginBottom: 20
};

export default function PessoaFisica(props) {
    
    const ajustaPessoaFisica = useCallback(event=> {
        const { name, value } = event.target; 
        
        props.pessoa[name] = value;
        props.setPessoa({...props.pessoa});
    },[props.pessoa]);


    const ajustaRg = useCallback(event=>{
        const {name, value } = event.target;
        const { rg } = props.pessoa;

        rg[name] = value;
        props.pessoa.rg = rg;

        props.setPessoa({...props.pessoa});        
    });

       
    return(
        <div>
            <label htmlFor={'nome'}>Nome completo*</label>
            <input id={'nome'} name={'nome'} value={props.pessoa.nome} onChange={ajustaPessoaFisica} 
                type={'text'} placeholder={'Nome completo'} maxLength={254} />

            <label htmlFor={'data_nascimento'}>Data nascimento*</label>
            <input id={'data_nascimento'} name={'data_nascimento'} value={props.pessoa.data_nascimento} 
                type={'date'} onChange={ajustaPessoaFisica} />
            
            <label htmlFor={'uf_nascimento'}>Estado nascimento*</label>
            <input id={'uf_nascimento'} name={'uf_nascimento'} type={'text'} placeholder={'Estado nascimento'} 
                value={props.pessoa.uf_nascimento} maxLength={155} onChange={ajustaPessoaFisica} />

            <label htmlFor={'naturalidade'}>Naturalidade*</label>
            <input id={'naturalidade'} name={'naturalidade'} value={props.pessoa.naturalidade} type={'text'} 
                placeholder={'Naturalidade'} maxLength={155} onChange={ajustaPessoaFisica} />

            <div>
                <label htmlFor={'sexo'}>Sexo*</label>
            </div>
            <select name={'sexo'} id={'sexo'} value={props.pessoa.sexo} onChange={ajustaPessoaFisica}>
                <option value={'M'}>Masculino</option>                    
                <option value={'F'}>Feminino</option>
            </select>

            <div>
                <label htmlFor={'estado_civil'}>Estado civil*</label>
            </div>
            <select name={'estado_civil'} id={'estado_civil'} value={props.pessoa.estado_civil} onChange={ajustaPessoaFisica}>
                <option value={'solteiro'}>Solteiro(a)</option>
                <option value={'casado'}>Casado(a)</option>
                <option value={'separado'}>Separado(a)</option>                    
                <option value={'divorciado'}>Divorciado(a)</option>                    
                <option value={'viuvo'}>Viúvo(a)</option>                    
            </select>

            <label htmlFor={'conjuge'}>Nome do cônjuge</label>
            <input id={'conjuge'} name={'conjuge'} value={props.pessoa.conjuge} type={'text'} 
                placeholder={'Nome completo'} maxLength={254} onChange={ajustaPessoaFisica} />
            
            <label htmlFor={'cpf'}>CPF*</label>
            <input id={'cpf'} name={'cpf'} value={props.pessoa.cpf} type={'text'} placeholder={'CPF'} 
                maxLength={11} onKeyPress={SomenteNumeros} onChange={ajustaPessoaFisica} />
            
            <div style={styleContainerRg}>
                <div>
                    <label htmlFor={'numero'}>RG*</label>
                    <input id={'numero'} name={'numero'} value={props.pessoa.rg.numero} type={'text'} placeholder={'Registro Geral'}
                            maxLength={20} onKeyPress={SomenteNumeros} onChange={ajustaRg}/>
                </div>
                
                <div>
                    <label htmlFor={'orgao_expedidor'}>Orgão Exp.</label>
                    <input id={'orgao_expedidor'} name={'orgao_expedidor'} value={props.pessoa.rg.orgao_expedidor} 
                        type={'text'} maxLength={10} placeholder={'Ex.: SSP, DGPC ...'} onChange={ajustaRg} />
                </div>
                
                <UnidadeFederativa valueUf={props.pessoa.rg.uf} action={ajustaRg} title={'UF Exp.'} />
            </div>

            <label htmlFor={'mae'}>Nome da Mãe*</label>
            <input id={'mae'} name={'mae'} value={props.pessoa.mae} type={'text'} 
                placeholder={'Nome completo'} maxLength={254} onChange={ajustaPessoaFisica} />
            
            <label htmlFor={'pai'}>Nome do Pai</label>
            <input id={'pai'} name={'pai'} value={props.pessoa.pai} type={'text'} 
                placeholder={'Nome completo'} maxLength={254} onChange={ajustaPessoaFisica} />              

            { props.btnAdd && props.btnAdd }

        </div>
    );
}