import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

export default function AvalistasDeCliente({uidCliente}) {
    const [avalistas, setAvalistas] = useState([]);
    
    useEffect(()=> {
        let avalistasCache = window.sessionStorage.getItem('avalista');
        let avalistasCacheJSON = avalistasCache ? JSON.parse(avalistasCache) : [];

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