import React from 'react';
import PJMaisSocios from '../../../Components/PJMaisSocios';
import Endereco from '../../../Components/Endereco';
import Contato from '../../../Components/Contato';
import AnexosCliente from '../../../Components/AnexosCliente';
import AvalistasDeCliente from '../../../Components/AvalistasDeCliente';
import Credito from '../../../Components/Credito';
import DetalhesCliente from '../../../Components/DetalhesCliente';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';


export default function Novo(props) {

    return (
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Novo</span>
            </div>

            <h2 className={'tituloTabs'}>Novo Cliente</h2>

            
            <div className={'tabordion'}>
                
                <PJMaisSocios />
                <Endereco />
                <Contato />
                <AnexosCliente />
                <AvalistasDeCliente />
                <Credito />
                <DetalhesCliente />

            </div>
           
           
            <button type={'button'} title={'Salvar novo cliente'} className={'btnAdd btnSalvarCliente'}>
                <FontAwesomeIcon icon={faSave} color={'#fff'} size={'lg'} />                
            </button>
           
        </div>
    );
}