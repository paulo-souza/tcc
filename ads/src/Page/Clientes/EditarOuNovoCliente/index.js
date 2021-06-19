import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../Components/Loading';
import PJMaisSocios from '../../../Components/PJMaisSocios';
import EnderecoCliente from '../../../Components/EnderecoCliente';
import ContatoCliente from '../../../Components/ContatoCliente';
import AnexosCliente from '../../../Components/AnexosCliente';
import AvalistasDeCliente from '../../../Components/AvalistasDeCliente';
import Credito from '../../../Components/Credito';
import DetalhesCliente from '../../../Components/DetalhesCliente';
import { busqueCliente } from '../../../Helper/Firebase/Cliente';
import busqueContato from '../../../Helper/Firebase/Contato';
import busqueCredito from '../../../Helper/Firebase/Credito';
import busqueEndereco from '../../../Helper/Firebase/Endereco';
import busquePessoasFisica from '../../../Helper/Firebase/PessoaFisica';
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';

const MsgVoltar = 'Ao voltar para página inicial todos os dados fornecidos serão descartados. Tem certeza que deseja prosseguir?';

export default function EditarOuNovoCliente() {
    const { uidCliente } = useParams();
    const ehNovoCliente = !uidCliente;
    const titulo = ehNovoCliente ? 'Novo' : 'Editar';
    const { estaCarregando, setEstaCarregando } = useContext(AuthContext); 
    
    
    useEffect(()=> {
        setEstaCarregando(!ehNovoCliente);

        if(!ehNovoCliente){
            busqueCliente(uidCliente);
            busqueContato('contato_cliente', uidCliente);
            busqueEndereco('endereco_cliente', uidCliente);
            busquePessoasFisica('socio', uidCliente);
            busquePessoasFisica('avalista', uidCliente);
            busqueCredito(uidCliente, setEstaCarregando);            
        }
    }, []);

    function ehParaVoltar(event) {

        // if(!SaoIguais(cliente, clienteDefault)) {            
        //     if(window.confirm(MsgVoltar)){
        //         setCliente(clienteDefault);
        //         setSocios([]);
        //     } else {
        //         event.preventDefault();
        //     }
        // }
    }
  
    return (
        <div>            

            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'} onClick={ehParaVoltar}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>{titulo}</span>
            </div>

            <h2 className={'tituloTabs'}>{`${titulo} Cliente`}</h2>
            
            {
                estaCarregando ? <Loading /> 
                :
                <div className={'tabordion'}>
                    
                    <PJMaisSocios />
                    <EnderecoCliente />
                    <ContatoCliente  />
                    <AnexosCliente />
                    <AvalistasDeCliente uidCliente={uidCliente} />
                    <Credito />
                    <DetalhesCliente />

                </div>           

            }

           
            <button type={'button'} title={'Salvar novo cliente'} className={'btnAdd btnSalvarCliente'}>
                <FontAwesomeIcon icon={faSave} color={'#fff'} size={'lg'} />                
            </button>
           
        </div>
    );
}