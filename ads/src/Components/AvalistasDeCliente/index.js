import React, { useState, useEffect, useContext }  from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

export default function AvalistasDeCliente({uidCliente}) {
    const { todosContatoAvalista, todosEnderecoAvalista } = useContext(AuthContext);
    const [avalistas, setAvalistas] = useState([]);

    useEffect(()=> {
        let avalistasCache = window.sessionStorage.getItem('avalista');
        let avalistasCacheJSON = avalistasCache ? JSON.parse(avalistasCache) : [];

        if(avalistasCacheJSON.length > 0 && (todosEnderecoAvalista.size > 0 && todosContatoAvalista.size > 0)) {
            let enderecos_avalistas = [];
            let contatos_avalistas = [];

            avalistasCacheJSON.forEach(avalista => {                
                enderecos_avalistas.push(todosEnderecoAvalista.get(avalista.uid));
                contatos_avalistas.push(todosContatoAvalista.get(avalista.uid));
            });
            
            window.sessionStorage.setItem('contato_avalista', JSON.stringify(contatos_avalistas));
            window.sessionStorage.setItem('endereco_avalista', JSON.stringify(enderecos_avalistas));
        }

        setAvalistas(avalistasCacheJSON);
    }, []);

    return (
        <section id={'section5'}>
            <input type={'radio'} name={'sections'} id={'option5'} />
            <label className={'labelTabs'} htmlFor={'option5'}>Avalistas</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Avalistas*</h3>
                    <Link to={'/Clientes/Novo/Avalistas'} className={'btnNovoCliente'} title={'Novo avalista'}>Novo</Link>                    
                </div>

                <hr />

                <div className={'containerCliente'}>
                   {
                       avalistas.map(avalista=> {
                           return(
                               <Link key={avalista.uid} to={`/Clientes/Editar/${uidCliente}/Avalista/${avalista.uid}`}>{avalista.nome}</Link>
                           );
                       })
                   }
                </div>

                <hr />
            </article>
        </section>
    );
}