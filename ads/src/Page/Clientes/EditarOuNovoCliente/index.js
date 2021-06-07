import React, { useEffect, useState } from 'react';
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
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';



export default function EditarOuNovoCliente(props) {
    const { uid } = useParams();
    let ehNovoCliente = !uid;
    let titulo = ehNovoCliente ? 'Novo' : 'Editar';

    const [endereco, setEndereco] = useState(EnderecoDefault);
    const [contato, setContato] = useState(ContatoDefault);

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
        }
    }, []);

    return (
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>{titulo}</span>
            </div>

            <h2 className={'tituloTabs'}>{`${titulo} Cliente`}</h2>

            
            <div className={'tabordion'}>
                
                <PJMaisSocios uid={uid}/>
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