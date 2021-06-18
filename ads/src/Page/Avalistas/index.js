import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PessoaFisica from '../../Components/Form/PessoaFisica';
import Endereco from '../../Components/Form/Endereco';
import Contato from '../../Components/Form/Contato';
import { pessoaFisicaDefault } from '../../Helper/ObjetoDefault';
import '../../Css/Tabs.css';
import '../../Css/Cliente.css';

export default function Avalistas() {
    const { uidAvalista, uidCliente } = useParams();

    const ehNovoCliente = !uidAvalista && !uidCliente;
    const ehNovoAvalista = ehNovoCliente || (uidCliente && !uidAvalista);

    const [avalista, setAvalista] = useState(null);

    useEffect(()=> {
        let avalistasCache = window.sessionStorage.getItem('avalista');
        let avalistasCacheJSON = avalistasCache && JSON.parse(avalistasCache);
        let avalistaObtido = pessoaFisicaDefault;
        
        if(avalistasCacheJSON) avalistaObtido = avalistasCacheJSON.find(s=> s.uid === uidAvalista);

        setAvalista(avalistaObtido);
    }, []);

    const titulo = 'Novo'

    return(
        <div>            

            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Avalista</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>{titulo}</span>
            </div>

            <h2 className={'tituloTabs'}>{`${titulo} Avalista`}</h2>
            
            <div style={{height: (window.innerHeight * 55/100) - 55/100}} className={'tabordion'}> 
                <section id={'section1'}>
                    <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
                    <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

                    <article>                        
                          { avalista && <PessoaFisica pessoa={avalista} ehEditar={!ehNovoAvalista} /> }                     
                    </article>
                </section>           
                
                <Endereco  uid={uidAvalista} tipoPessoa={'avalista'} />
                <Contato uid={uidAvalista} tipoPessoa={'avalista'} />
            </div>           
        
            <div style={{marginTop: 65, marginLeft: '25.5%', marginRight: '10.5%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button type={'button'} title={'Adicionar avalista'} className={'btnSubmit'}>
                    Adicionar             
                </button>
            </div>
       
         </div>
    );
}