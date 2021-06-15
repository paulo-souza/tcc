import React, { useState, useCallback, useContext, useEffect } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import UnidadeFederativa from '../UnidadeFederativa';
import SomenteNumeros from '../../Helper/Utilidades/SomenteNumeros';

export default function Endereco(props) {
   
    const {enderecoDefault, enderecoClientes, enderecoAvalistas} = useContext(ClienteContext);

    const ehParaEditarEndereco = props.uid;
    const[endereco, setEndereco] = useState(enderecoDefault);
    const[interval, setInterval] = useState(1200);

    useEffect(()=> {
        if(ehParaEditarEndereco) setEndereco(obtenhaEnderecoPeloTipoPessoa(props.tipoPessoa.toLowerCase()));        
    }, []);
   
    const ajustaEndereco = useCallback(event=> {
        const { name, value } = event.target; 
        let valor = value;

        if(value === 'false' || value === 'true') valor = JSON.parse(valor);

        endereco[name] = valor;
        setEndereco({...endereco});
    },[endereco]);

    function obtenhaEnderecoPeloTipoPessoa(tipoPessoa) {
        const pessoas = {
            cliente: enderecoClientes.find(end=> end.uid === props.uid),
            avalista: enderecoAvalistas.find(end=> end.uid === props.uid)
        };

        return pessoas[tipoPessoa];
    }

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
          endereco.uf = json.uf;
          endereco.cidade = json.localidade;
          endereco.logradouro = json.logradouro;
          endereco.complemento = json.complemento;
          endereco.bairro = json.bairro;
          
          setEndereco({...endereco});
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
                            checked={endereco.imovel_proprio} value={!endereco.imovel_proprio} />
                        <label style={{marginLeft: 8}} htmlFor={'imovel_proprio'}>Imóvel próprio?</label>
                    </div>

                    <label htmlFor={'cep'}>CEP*</label>
                    <input id={'cep'} name={'cep'} type={'text'} onChange={ajustaEndereco} onKeyPress={SomenteNumeros}
                         placeholder={'CEP'} maxLength={8} value={endereco.cep} onKeyUp={e=> jaDigitouCep(e.target.value)} />

                    
                    <UnidadeFederativa valueUf={endereco.uf} action={ajustaEndereco} />

                    <label htmlFor={'cidade'}>Cidade*</label>
                    <input id={'cidade'} name={'cidade'} value={endereco.cidade}
                        onChange={ajustaEndereco} type={'text'} placeholder={'Cidade'}  />

                    <label htmlFor={'logradouro'}>Logradouro*</label>
                    <input id={'logradouro'} name={'logradouro'} value={endereco.logradouro}
                        onChange={ajustaEndereco} type={'text'} placeholder={'Rua, Avenida, Viela, Rodovia, ...'}  />

                    <label htmlFor={'complemento'}>Complemento</label>
                    <input id={'complemento'} name={'complemento'} value={endereco.complemento} 
                        onChange={ajustaEndereco} type={'text'} placeholder={'Quadra, Lote'}  />

                    <label htmlFor={'bairro'}>Bairro*</label>
                    <input id={'bairro'} name={'bairro'} value={endereco.bairro} 
                        onChange={ajustaEndereco} type={'text'} placeholder={'Bairro'}  />

                    <label htmlFor={'numero'}>Número</label>
                    <input id={'numero'} name={'numero'} value={endereco.numero}
                        onChange={ajustaEndereco} type={'text'} placeholder={'Número'}  />
                </div>
            </article>
        </section>
    );
}