import React, { useState, useEffect, useContext } from 'react';
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
import clienteDefault, { creditoDefault, enderecoDefault, contatoDefault } from '../../../Helper/ObjetoDefault';
import getContato from '../../../Helper/Firebase/Contato';
import getEndereco from '../../../Helper/Firebase/Endereco';
import getCredito from '../../../Helper/Firebase/Credito';
import getPessoasFisica from '../../../Helper/Firebase/PessoaFisica';
import SaoIguais from '../../../Helper/Utilidades/SaoIguais';
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';

const MsgVoltar = 'Ao voltar para página inicial todos os dados fornecidos serão descartados. Tem certeza que deseja prosseguir?';

export default function EditarOuNovoCliente() {
    const { uidCliente } = useParams();
    const { todosClientes } = useContext(ClienteContext); 
    const ehNovoCliente = !uidCliente;
    const titulo = ehNovoCliente ? 'Novo' : 'Editar';
    
    const [cliente, setCliente] = useState(clienteDefault);
    const [socios, setSocios] = useState([]);
    const [avalistas, setAvalistas] = useState([]);
    const [credito, setCredito] = useState(creditoDefault);
    const [endereco, setEndereco] = useState(enderecoDefault);
    const [contato, setContato] = useState(contatoDefault);

     
    
    useEffect(()=> {
        if(!ehNovoCliente){
            setCliente(todosClientes.get(uidCliente));
            getContato('contato_cliente', uidCliente, setContato);
            getEndereco('endereco_cliente', uidCliente, setEndereco);
            getCredito(uidCliente, setCredito);
            getPessoasFisica('socio', uidCliente, setSocios);
            getPessoasFisica('avalista', uidCliente, setAvalistas);
        }
    }, []);

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
                
                <PJMaisSocios socios={socios} cliente={cliente}/>
                <Endereco endereco={endereco} setEndereco={setEndereco} />
                <Contato contato={contato} setContato={setContato} />
                <AnexosCliente />
                <AvalistasDeCliente avalistas={avalistas} uidCliente={uidCliente} />
                <Credito credito={credito} setCredito={setCredito} />
                <DetalhesCliente credito={credito} />

            </div>           
           
            <button type={'button'} title={'Salvar novo cliente'} className={'btnAdd btnSalvarCliente'}>
                <FontAwesomeIcon icon={faSave} color={'#fff'} size={'lg'} />                
            </button>
           
        </div>
    );
}