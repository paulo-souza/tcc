import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import JwPagination from 'jw-react-pagination';
import getClientes from '../../Helper/Firebase/TabelaCliente';
import '../../Css/TabelaDefault.css';
import '../../Css/TabelaCliente.css';

const customLabels = {        
    first: '<<',
    last: '>>',
    previous: 'Anterior',
    next: 'Próximo'        
};


export default function TabelaCliente(){
    const { setEstaCarregando } = useContext(AuthContext);
    
    const [clientes, setClientes] = useState([]);
    const [itens, setItens] = useState([]);

    const classNamePagamento = {'em dia': 'tabPagamentoEmDia', pendente: 'tabPagamentoPendente', inadimplente: 'tabPagamentoInadimplente'};

    useEffect(()=> {
        getClientes(setClientes,setEstaCarregando);
    },[]);


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
                        itens.map(cliente=>{
                            // let pagamento = cliente.pagamento.toLowerCase();
                            let cnpjFormatado = cliente.cnpj?.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
                            return(
                                <tr key={cliente.uid}>
                                    <td className={'tabCnpjCliente'}>
                                        <Link to={`/Clientes/Editar/${cliente.uid}`}>{cnpjFormatado}</Link>                                        
                                    </td>
                                    <td className={'tabNomeCliente'}>
                                        <Link to={`/Clientes/Editar/${cliente.uid}`}>{cliente.nome_fantazia}</Link>                                        
                                    </td>
                                    <td className={`tabPagamentoCliente ${classNamePagamento['pendente']}`}>Pendente</td>
                                </tr>
                            );
                        })
                    }

                </tbody>

            </table>

            <JwPagination items={clientes} labels={customLabels}
                    onChangePage={pagina=> setItens(pagina)} />

        </div>

    );
}