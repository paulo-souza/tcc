import React, { useState, useCallback } from 'react';
import UnidadeFederativa from '../UnidadeFederativa';
import { pessoaFisicaDefault } from '../../Helper/ObjetoDefault';
import SomenteNumeros from '../../Helper/Utilidades/SomenteNumeros';

const styleContainerRg = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginBottom: 20
};

export default function PessoaFisica(props) {

    const [pessoaFisica, setPessoaFisica] = useState(props.pessoa ? props.pessoa : pessoaFisicaDefault);    

       
    const ajustaPessoaFisica = useCallback(event=> {
        const { name, value } = event.target; 
        
        pessoaFisica[name] = value;
        setPessoaFisica({...pessoaFisica});
    },[pessoaFisica]);


    const ajustaRg = useCallback(event=>{
        const {name, value } = event.target;
        const { rg } = pessoaFisica;

        rg[name] = value;
        pessoaFisica.rg = rg;

        setPessoaFisica({...pessoaFisica});        
    });

    
    return(
        <div>
            <label htmlFor={'nome'}>Nome completo*</label>
            <input id={'nome'} name={'nome'} value={pessoaFisica.nome} onChange={ajustaPessoaFisica}
                type={'text'} placeholder={'Nome completo'} maxLength={254} />

            <label htmlFor={'data_nascimento'}>Data nascimento*</label>
            <input id={'data_nascimento'} name={'data_nascimento'} value={pessoaFisica.data_nascimento} 
                type={'date'} onChange={ajustaPessoaFisica} />
            
            <label htmlFor={'uf_nascimento'}>Estado nascimento*</label>
            <input id={'uf_nascimento'} name={'uf_nascimento'} type={'text'} placeholder={'Estado nascimento'} 
                value={pessoaFisica.uf_nascimento} maxLength={155} onChange={ajustaPessoaFisica} />

            <label htmlFor={'naturalidade'}>Naturalidade*</label>
            <input id={'naturalidade'} name={'naturalidade'} value={pessoaFisica.naturalidade} type={'text'} 
                placeholder={'Naturalidade'} maxLength={155} onChange={ajustaPessoaFisica} />

            <div>
                <label htmlFor={'sexo'}>Sexo*</label>
            </div>
            <select name={'sexo'} id={'sexo'} value={pessoaFisica.sexo} onChange={ajustaPessoaFisica}>
                <option value={'M'}>Masculino</option>                    
                <option value={'F'}>Feminino</option>
            </select>

            <div>
                <label htmlFor={'estado_civil'}>Estado civil*</label>
            </div>
            <select name={'estado_civil'} id={'estado_civil'} value={pessoaFisica.estado_civil} onChange={ajustaPessoaFisica}>
                <option value={'solteiro'}>Solteiro(a)</option>
                <option value={'casado'}>Casado(a)</option>
                <option value={'separado'}>Separado(a)</option>                    
                <option value={'divorciado'}>Divorciado(a)</option>                    
                <option value={'viuvo'}>Viúvo(a)</option>                    
            </select>

            <label htmlFor={'conjuge'}>Nome do cônjuge</label>
            <input id={'conjuge'} name={'conjuge'} value={pessoaFisica.conjuge} type={'text'} 
                placeholder={'Nome completo'} maxLength={254} onChange={ajustaPessoaFisica} />
            
            <label htmlFor={'cpf'}>CPF*</label>
            <input id={'cpf'} name={'cpf'} value={pessoaFisica.cpf} type={'text'} placeholder={'CPF'} 
                maxLength={11} onKeyPress={SomenteNumeros} onChange={ajustaPessoaFisica} />
            
            <div style={styleContainerRg}>
                <div>
                    <label htmlFor={'numero'}>RG*</label>
                    <input id={'numero'} name={'numero'} value={pessoaFisica.rg.numero} type={'text'} placeholder={'Registro Geral'}
                            maxLength={20} onKeyPress={SomenteNumeros} onChange={ajustaRg}/>
                </div>
                
                <div>
                    <label htmlFor={'orgao_expedidor'}>Orgão Exp.</label>
                    <input id={'orgao_expedidor'} name={'orgao_expedidor'} value={pessoaFisica.rg.orgao_expedidor} 
                        type={'text'} maxLength={10} placeholder={'Ex.: SSP, DGPC ...'} onChange={ajustaRg} />
                </div>
                
                <UnidadeFederativa valueUf={pessoaFisica.rg.uf} action={ajustaRg} title={'UF Exp.'} />
            </div>

            <label htmlFor={'mae'}>Nome da Mãe*</label>
            <input id={'mae'} name={'mae'} value={pessoaFisica.mae} type={'text'} 
                placeholder={'Nome completo'} maxLength={254} onChange={ajustaPessoaFisica} />
            
            <label htmlFor={'pai'}>Nome do Pai</label>
            <input id={'pai'} name={'pai'} value={pessoaFisica.pai} type={'text'} 
                placeholder={'Nome completo'} maxLength={254} onChange={ajustaPessoaFisica} />              


                { props.button }
        </div>
    );
}