import React, { useContext } from 'react';
import { ClienteContext } from '../../../Context/ClienteProvider';
import PJMaisSocios from '../../../Components/PJMaisSocios';
import Endereco from '../../../Components/Endereco';
import Contato from '../../../Components/Contato';
import AnexosCliente from '../../../Components/AnexosCliente';
import AvalistasDeCliente from '../../../Components/AvalistasDeCliente';
import Credito from '../../../Components/Credito';
import DetalhesCliente from '../../../Components/DetalhesCliente';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import clienteDefault from '../../../Helper/ObjetoDefault';
import SaoIguais from '../../../Helper/Utilidades/SaoIguais';
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';

const MsgVoltar = 'Ao voltar para página inicial todos os dados fornecidos serão descartados. Tem certeza que deseja prosseguir?';

export default function EditarOuNovoCliente(props) {
    const { uidCliente } = useParams();
    const ehNovoCliente = !uidCliente;
    const titulo = ehNovoCliente ? 'Novo' : 'Editar';
    
    const {clientes, cliente, setCliente, setSocios} = useContext(ClienteContext); 
    
    !ehNovoCliente && setCliente(clientes.get(uidCliente));
    

    function ehParaVoltar(event) {

        if(!SaoIguais(cliente, clienteDefault)) {            
            if(window.confirm(MsgVoltar)){
                setCliente(clienteDefault);
                setSocios([]);
            } else {
                event.preventDefault();
            }
        }
    }
  
    return (
        <div>            

            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'} onClick={ehParaVoltar}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>{titulo}</span>
            </div>

            <h2 className={'tituloTabs'}>{`${titulo} Cliente`}</h2>
            
            <div className={'tabordion'}>
                
                <PJMaisSocios />
                <Endereco uid={uidCliente} tipoPessoa={'cliente'} />
                <Contato uid={uidCliente} tipoPessoa={'cliente'} />
                <AnexosCliente />
                <AvalistasDeCliente uidCliente={uidCliente}/>
                <Credito />
                <DetalhesCliente />

            </div>           
           
            <button type={'button'} title={'Salvar novo cliente'} className={'btnAdd btnSalvarCliente'}>
                <FontAwesomeIcon icon={faSave} color={'#fff'} size={'lg'} />                
            </button>
           
        </div>
    );
}