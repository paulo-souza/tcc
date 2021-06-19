import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { customLabels } from '../../Helper/ObjetoDefault';
import JwPagination from 'jw-react-pagination';
import '../../Css/TabelaDefault.css';
import '../../Css/TabelaCliente.css';
                       

export default function TabelaCliente({clientes}){     

    const[itens, setItens] = useState([]);

    const classNamePagamento = {'pago': 'tabPagamentoEmDia', pendente: 'tabPagamentoPendente', inadimplente: 'tabPagamentoInadimplente'};

    return(

        <div className={'containerTabelaCliente'}>
            
            <table className={'tabela'}>
                <thead>
                    <tr className={'cabecalho'}>
                        <th className={'tabCnpjCliente'}>CNPJ</th>
                        <th className={'tabNomeCliente'}>Nome Fantasia</th>
                        <th className={'tabPagamentoCliente'}>Pagamento</th> 
                    </tr>
                </thead>                

                <tbody>
                    {
                        
                        itens.map(cliente=> {
                            
                            let cnpjFormatado = cliente.cnpj?.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
                            return(
                                <tr key={cliente.uid}>
                                    <td className={'tabCnpjCliente'}>
                                        <Link to={`/Clientes/Editar/${cliente.uid}`}>{cnpjFormatado}</Link>                                        
                                    </td>
                                    <td className={'tabNomeCliente'}>
                                        <Link to={`/Clientes/Editar/${cliente.uid}`}>{cliente.nome_fantasia}</Link>                                        
                                    </td>
                                    <td className={`tabPagamentoCliente ${classNamePagamento[cliente.pagamento]}`}>{cliente.pagamento}</td>
                                </tr>
                            );
                        })

                    }

                </tbody>

            </table>

            { <JwPagination items={clientes} labels={customLabels} onChangePage={pagina=> setItens(pagina)} /> }

        </div>

    );
}