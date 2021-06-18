import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PessoaFisica from '../../Components/Form/PessoaFisica';
import Endereco from '../../Components/Form/Endereco';
import Contato from '../../Components/Form/Contato';
import { pessoaFisicaDefault, contatoDefault, enderecoDefault } from '../../Helper/ObjetoDefault';
import '../../Css/Tabs.css';
import '../../Css/Cliente.css';

export default function Avalistas() {
    const { uidAvalista, uidCliente } = useParams();

    const ehNovoCliente = !uidAvalista && !uidCliente;
    const ehNovoAvalista = ehNovoCliente || (uidCliente && !uidAvalista);
    const titulo = ehNovoAvalista ? 'Novo Avalista' : 'Editar Avalista';
  

    const [avalista, setAvalista] = useState(null);
    const [enderecoAvalista, setEnderecoAvalista] = useState(null);
    const [contatoAvalista, setContatoAvalista] = useState(null);

    useEffect(()=> {
        let avalistasCache = window.sessionStorage.getItem('avalista');
        let avalistasCacheJSON = avalistasCache && JSON.parse(avalistasCache);
        let avalistaObtido = pessoaFisicaDefault;
        
        if(avalistasCacheJSON) avalistaObtido = avalistasCacheJSON.find(s=> s.uid === uidAvalista);
        setAvalista(avalistaObtido);

        let enderecosCache = window.sessionStorage.getItem('endereco_avalista');
        let enderecosCacheJSON = enderecosCache && JSON.parse(enderecosCache);
        let enderecoObtido = enderecoDefault;
        
        console.log('enderecosCacheJSON => ',enderecosCacheJSON);

        if(enderecosCacheJSON) enderecoObtido = enderecosCacheJSON.find(e=> e.uid === uidAvalista);
        setEnderecoAvalista(enderecoObtido);
        
        
        let contatoCache = window.sessionStorage.getItem('contato_avalista');
        let contatoCacheJSON = contatoCache && JSON.parse(contatoCache);
        let contatoObtido = contatoDefault;

        if(contatoCacheJSON) contatoObtido = contatoCacheJSON.find(c=> c.uid === uidAvalista);
        setContatoAvalista(contatoObtido);
   
    }, []);

    const pathSubNivel = ehNovoCliente  ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;

  
    return(
        <div>            

            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>

                <Link to={pathSubNivel} className={'niveis'}>{`${ ehNovoCliente ? 'Novo' : 'Editar' }`}</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>

                <span className={'niveis'}>Avalista</span>
            </div>

            <h2 className={'tituloTabs'}>{titulo}</h2>
            {
                (avalista && enderecoAvalista && contatoAvalista) && 

                <div style={{height: (window.innerHeight * 55/100) - 55/100}} className={'tabordion'}> 
                    <section id={'section1'}>
                        <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
                        <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

                        <article>                        
                            <PessoaFisica pessoa={avalista} setPessoa={setAvalista} />                    
                        </article>
                    </section>  

                    <section id={'section2'}>
                        <input type={'radio'} name={'sections'} id={'option2'} />
                        <label className={'labelTabs'} htmlFor={'option2'}>Endereço</label> 

                        <article>
                            <Endereco endereco={enderecoAvalista} setEndereco={setEnderecoAvalista} />
                        </article>
                    </section>  

                    <section id={'section3'}>
                        <input type={'radio'} name={'sections'} id={'option3'} />
                        <label className={'labelTabs'} htmlFor={'option3'}>Contato</label>

                        <article>   
                            <Contato  contato={contatoAvalista} setContato={setContatoAvalista} />
                        </article>  
                    </section>                    
                </div> 
              

            }
          
        
            <div style={{marginTop: 65, marginLeft: '25.5%', marginRight: '10.5%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button type={'button'} title={'Adicionar avalista'} className={'btnSubmit'}>
                    Adicionar             
                </button>
            </div>
       
         </div>
    );
}