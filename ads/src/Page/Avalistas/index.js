import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Endereco, { EnderecoDefault } from '../../Components/Endereco';
import Contato, { ContatoDefault } from '../../Components/Contato';
import '../../Css/Tabs.css';
import '../../Css/Cliente.css';

export default function Avalistas(props) {
    const[endereco, setEndereco] = useState(EnderecoDefault);
    const[contato, setContato] = useState(ContatoDefault);

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
                        <div className={'containerClienteSubTitulo'}>
                            <h3>Avalista*</h3>                    
                        </div>

                        <hr />

                            Nome, rg, cpf, data de nascimento e etc...

                        <hr /> 
                    
                    </article>
                </section>           
                
                <Endereco endereco={endereco} setEndereco={setEndereco} />
                <Contato contato={contato} setContato={setContato} />
            </div>           
        
            <div style={{marginTop: 65, marginLeft: '25.5%', marginRight: '10.5%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button type={'button'} title={'Adicionar avalista'} className={'btnSubmit'}>
                    Adicionar             
                </button>
            </div>
       
         </div>
    );
}