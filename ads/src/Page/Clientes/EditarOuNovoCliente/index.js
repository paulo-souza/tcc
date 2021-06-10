import React, { useEffect, useState, useContext } from 'react';
import { ClienteContext } from '../../../Context/ClienteProvider';
import PJMaisSocios from '../../../Components/PJMaisSocios';
import Endereco, { EnderecoDefault } from '../../../Components/Endereco';
import Contato, { ContatoDefault } from '../../../Components/Contato';
import AnexosCliente from '../../../Components/AnexosCliente';
import AvalistasDeCliente from '../../../Components/AvalistasDeCliente';
import Credito from '../../../Components/Credito';
import DetalhesCliente from '../../../Components/DetalhesCliente';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import SaoIguais from '../../../Utilidades/SaoIguais';
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';

const MsgVoltar = 'Ao voltar para página inicial todos os dados fornecidos serão descartados. Tem certeza que deseja prosseguir?';

export default function EditarOuNovoCliente(props) {
    const { uidCliente } = useParams();
    const ehNovoCliente = !uidCliente;
    const titulo = ehNovoCliente ? 'Novo' : 'Editar';
    
    const {cliente, setCliente, clienteDefault} = useContext(ClienteContext);
    const [endereco, setEndereco] = useState(EnderecoDefault);
    const [contato, setContato] = useState(ContatoDefault);
    const [socios, setSocios] = useState([]);
    
    

    useEffect(()=>{
     // Dados de teste

        if(!ehNovoCliente) { //Aqui será realizado a busca do endereço no firebase
            setEndereco({
                imovel_proprio: true,
                cep: "44694344",
                uf: "GO",
                cidade: "Goiânia",
                logradouro: "866 Manley Harbors",
                complemento: "maiores",
                bairro: "Setor Marista",
                numero: 416
            });

            setContato({
                email1: "jayce_weissnat@hotmail.com",
                email2: "ashly_franecki@yahoo.com",
                telefone1: "6253875180",
                telefone2: "6266684300",
                celular1: "62997834381",
                celular2: "629941844076"
            });

            setSocios([
                {
                    uid: "9093393a-1ba9-4b12-bc6f-45e7089714f5",
                    data_nascimento: "05/27/1989",
                    nacionalidade: "Brasileira",
                    uf_nascimento: "PR",
                    naturalidade: "Londrina",
                    estado_civil: "Casado(a)",
                    conjuge: "Paul Severino Gonçalves Medeiros",
                    rg: {numero: "504092983", orgao_expedidor: "SSP", uf_expedidor: "PR"},
                    cpf: "01945849096",
                    mae: "Bethany Kshlerin",
                    nome: "Luiza Macedo Cardoso",
                    sexo: "Feminino",
                    pai: "Antônio Iago Fernandes"
                },
                {
                    uid: "501536ce-a2a6-49e8-a63c-c069c8ac4dde",
                    data_nascimento: "07/22/1988",
                    nacionalidade: "Brasileira",
                    uf_nascimento: "RJ",
                    naturalidade: "Rio de Janeiro",
                    estado_civil: "Divorciado(a)",
                    conjuge: "",
                    rg: {numero: "980475250", orgao_expedidor: "SSP", uf_expedidor: "RJ"},
                    cpf: "34571746016",
                    mae: "Julian McKenzie Silva",
                    nome: "Dalila Costa Silva",
                    sexo: "Feminino",
                    pai: "Enrico Ian Oliver Pinto"
                }
            ])
        }

    }, []);

    function ehParaVoltar(event) {

        if(!SaoIguais(cliente, clienteDefault)) {            
            if(window.confirm(MsgVoltar)){
                setCliente(clienteDefault);
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
                
                <PJMaisSocios uidCliente={uidCliente} socios={socios} />
                <Endereco endereco={endereco} setEndereco={setEndereco} />
                <Contato contato={contato} setContato={setContato} />
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