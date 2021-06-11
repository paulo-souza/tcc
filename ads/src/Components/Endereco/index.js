import React, { useState, useCallback } from 'react';
import UnidadeFederativa from '../UnidadeFederativa';
import SomenteNumeros from '../../Utilidades/SomenteNumeros';

export const EnderecoDefault = {
    imovel_proprio: false,
    cep: '',
    uf: '',
    cidade: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    numero: '',
};

export default function Endereco(props) {
    
    const [interval, setInterval] = useState(1200);
   
    const ajustaEndereco = useCallback(event=> {
        const { name, value } = event.target; 
        let valor = value;

        if(value === 'false' || value === 'true') valor = JSON.parse(valor);

        props.endereco[name] = valor;
        props.setEndereco({...props.endereco});
    },[props.endereco]);


    function jaDigitouCep(cepParaBuscar) {
        if(!cepParaBuscar) return;
        const TotalDeCaracteresCep = 8;

        if(cepParaBuscar.length == TotalDeCaracteresCep){
            clearTimeout(interval);
            let newInterval = setTimeout(()=> buscarCep(cepParaBuscar), 1200);
            setInterval(newInterval);
        }
    }


    function buscarCep(cepParaBuscar) {

        let urlApiCep = `https://viacep.com.br/ws/${cepParaBuscar}/json/`;

        fetch(urlApiCep)
        .then(r=> r.json())
        .then(json=> {
          props.endereco.uf = json.uf;
          props.endereco.cidade = json.localidade;
          props.endereco.logradouro = json.logradouro;
          props.endereco.complemento = json.complemento;
          props.endereco.bairro = json.bairro;
          
          props.setEndereco({...props.endereco});
        })
        .catch(error=> console.log('Erro ao buscar CEP na api: ', error));
    }

    return(
        <section id={'section2'}>
            <input type={'radio'} name={'sections'} id={'option2'} />
            <label className={'labelTabs'} htmlFor={'option2'}>Endereço</label>

            <article >
                <div>
                    <div style={{marginTop: 0, marginBottom: 25, width: 150, height: 25, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <input style={{width: 'auto', padding: 0, margin:0}} type={'checkbox'} 
                            id={'imovel_proprio'} name={'imovel_proprio'} onChange={ajustaEndereco}
                            checked={props.endereco.imovel_proprio} value={!props.endereco.imovel_proprio} />
                        <label style={{marginLeft: 8}} htmlFor={'imovel_proprio'}>Imóvel próprio?</label>
                    </div>

                    <label htmlFor={'cep'}>CEP*</label>
                    <input id={'cep'} name={'cep'} type={'text'} onChange={ajustaEndereco} onKeyPress={SomenteNumeros}
                         placeholder={'CEP'} maxLength={8} value={props.endereco.cep} onKeyUp={e=> jaDigitouCep(e.target.value)} />

                    
                    <UnidadeFederativa valueUf={props.endereco.uf} action={ajustaEndereco} />

                    <label htmlFor={'cidade'}>Cidade*</label>
                    <input id={'cidade'} name={'cidade'} value={props.endereco.cidade}
                        onChange={ajustaEndereco} type={'text'} placeholder={'Cidade'}  />

                    <label htmlFor={'logradouro'}>Logradouro*</label>
                    <input id={'logradouro'} name={'logradouro'} value={props.endereco.logradouro}
                        onChange={ajustaEndereco} type={'text'} placeholder={'Rua, Avenida, Viela, Rodovia, ...'}  />

                    <label htmlFor={'complemento'}>Complemento</label>
                    <input id={'complemento'} name={'complemento'} value={props.endereco.complemento} 
                        onChange={ajustaEndereco} type={'text'} placeholder={'Quadra, Lote'}  />

                    <label htmlFor={'bairro'}>Bairro*</label>
                    <input id={'bairro'} name={'bairro'} value={props.endereco.bairro} 
                        onChange={ajustaEndereco} type={'text'} placeholder={'Bairro'}  />

                    <label htmlFor={'numero'}>Número</label>
                    <input id={'numero'} name={'numero'} value={props.endereco.numero}
                        onChange={ajustaEndereco} type={'text'} placeholder={'Número'}  />
                </div>
            </article>
        </section>
    );
}