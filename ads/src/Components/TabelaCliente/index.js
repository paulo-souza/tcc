import React, { useState, useEffect } from 'react';
import '../../Css/TabelaDefault.css';
import '../../Css/TabelaCliente.css';

export default function TabelaCliente(){

    const [clientes, setClientes] = useState([]);

    const classNamePagamento = {'em dia': 'tabPagamentoEmDia', pendente: 'tabPagamentoPendente', inadimplente: 'tabPagamentoInadimplente'};

    useEffect(()=> {
        let arrayTemp = [
            {uid: 'fb9005e3-9328-46c4-9ba2-4ea377c67034', cnpj: '86936852000100', nome: 'Edson e Gabriela Comercio de Bebidas Ltda', pagamento: 'Em dia'},
            {uid: '3516a1d2-500c-4849-b716-45da2dc7af53', cnpj: '38138090000154', nome: 'Paulo e Joaquim Telas ME', pagamento: 'Em dia'},
            {uid: 'b171bb15-ed79-4419-a816-4e8142585efb', cnpj: '66935888000162', nome: 'Alessandra e Jennifer Advocacia Ltda', pagamento: 'Pendente'},
            {uid: '979f6c3e-7f6d-4224-a0d6-aa2bf90874ad', cnpj: '22229576000168', nome: 'Isadora e Kevin Gráfica Ltda', pagamento: 'Inadimplente'},
            {uid: 'ef48f61a-8430-4bbf-afbf-7d2cbee443e6', cnpj: '85233804000193', nome: 'Ayla e João Buffet Ltda', pagamento: 'Em dia'},
            {uid: 'dbb696f6-50ee-4ecc-9d5d-e2eb8762d3f8', cnpj: '71018772000107', nome: 'Marcos Vinicius e Francisca Contábil Ltda', pagamento: 'Inadimplente'},
            {uid: '75ad284f-d503-491f-ac70-5027cbaf9b8c', cnpj: '42614306000188', nome: 'Ester e Marina Comercio de Bebidas Ltda', pagamento: 'Pendente'},
        ];

        setClientes(arrayTemp);
    },[]);


    return(
        <table className={'tabela'}>
            <thead>
                <tr className={'cabecalho'}>
                    <th className={'tabCnpjCliente'}>CNPJ</th>
                    <th className={'tabNomeCliente'}>Nome</th>
                    <th className={'tabPagamentoCliente'}>Pagamento</th> 
                </tr>
            </thead>

            <tbody>
                {
                    clientes.map(cliente=>{
                        let pagamento = cliente.pagamento.toLowerCase();

                        return(
                            <tr key={cliente.uid}>
                                <td className={'tabCnpjCliente'}>{cliente.cnpj}</td>
                                <td className={'tabNomeCliente'}>{cliente.nome}</td>
                                <td className={`tabPagamentoCliente ${classNamePagamento[pagamento]}`}>{cliente.pagamento}</td>
                            </tr>
                        );
                    })
                }

            </tbody>

        </table>
    );
}