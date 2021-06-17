import React, {useEffect, useCallback, useState } from 'react';
import { detalheCreditoDefault } from '../../Helper/ObjetoDefault';
import SomenteNumeros from '../../Helper/Utilidades/SomenteNumeros';
import ParseToMoedaBRL from '../../Helper/Utilidades/ParseToMoedaBRL';
import ParseToDate from '../../Helper/Utilidades/ParseToDate';
import { customLabels } from '../../Helper/ObjetoDefault';
import getDetalhesCredito from '../../Helper/Firebase/DetalheCredito';
import JwPagination from 'jw-react-pagination';
import '../../Css/TabelaDefault.css';
import '../../Css/DetalheCredito.css';


function getTipoPrazo(prazo) {
    if(!prazo) return 'Inexistente';

    const tipoPrazo = {
        mensal: 'mês',
        trimestral: 'trimestre',
        semestral: 'semestre',
        anual: 'ano'
    };

    return tipoPrazo[prazo];
}

export default function DetalhesCliente(props) {
    
    const [detalheCredito, setDetalheCredito] = useState(detalheCreditoDefault);
    const [detalhes, setDetalhes] = useState([]);
    const [itens, setItens] = useState([]);

    useEffect(()=> {        
        if(props.credito.uid) getDetalhesCredito(props.credito.uid, setDetalhes);
    }, [props.credito]);

  
    const ajustaDetalheCredito = useCallback(event => {
        // const { name, value } = event.target;

        // creditoContext[name] = value;
        // setCredito({ ...creditoContext });


    }, [detalheCredito]);



    return (
        <section id={'section7'}>
            <input type={'radio'} name={'sections'} id={'option7'} />
            <label className={'labelTabs'} htmlFor={'option7'}>Detalhes</label>

            <article>
                <div className={'containerDetalheCredito'}>
                    <span className={'detalhesCredito'}>Valor empréstimo: <strong>{ParseToMoedaBRL(props.credito.valor_emprestimo)}</strong></span>
                    <span className={'detalhesCredito'}>Tipo de juros: <strong>{props.credito.operacao_credito}</strong></span>
                    <span className={'detalhesCredito'}>Taxa de juros: <strong>{props.credito.taxa_juros}%</strong></span>
                    <span className={'detalhesCredito'}>Parcelas: {detalhes.length} por {getTipoPrazo(props.credito.prazo)}</span>
                </div>



                <label htmlFor={'numero_parcela'}>Nr Parcela</label>
                <input id={'numero_parcela'} name={'numero_parcela'} value={props.credito.numero_parcela} min={0}
                    type={'number'} placeholder={'ex.: 12'} onChange={ajustaDetalheCredito} onKeyPress={SomenteNumeros} />

                <div>
                    <label htmlFor={'pagamento'}>Pagamento</label>
                    <select name={'pagamento'} id={'pagamento'} onChange={ajustaDetalheCredito}>
                        <option value={'pago'}>Em dia</option>
                        <option value={'pendente'}>Pendente</option>
                        <option value={'inadimplente'}>Inadimplente</option>
                    </select>
                </div>

                <div id={'divBtnSituacao'}>
                    <button id={'btnSituacao'} type={'button'}>Alterar Situação</button>
                </div>
               

                <div className={'containerTabelaDetalhesCredito'}>

                    <table className={'tabela'}>
                        <thead>
                            <tr className={'cabecalho'}>
                                <th className={'camposDetalhes'}>Nr. Parcela</th>
                                <th className={'camposDetalhes'}>Tipo crédito</th>
                                <th className={'camposDetalhes'}>Dt. Vencimento</th>
                                <th className={'camposDetalhes'}>Valor</th>
                                <th className={'camposDetalhes'}>Valor Pago</th>
                                <th className={'camposDetalhes'}>Situação</th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                itens.map(item => {
                                   
                                    return (
                                        <tr key={item.uid}>
                                            <td className={'camposDetalhes'}> {item.numero_parcela}</td>
                                            <td className={'camposDetalhes'}> {item.tipo_credito}</td>
                                            <td className={'camposDetalhes'}> {ParseToDate(item.data_vencimento).toLocaleDateString()}</td>
                                            <td className={'camposDetalhes'}> {ParseToMoedaBRL(item.valor_pago)}</td>
                                            <td className={'camposDetalhes'}> {ParseToMoedaBRL(item.valor_parcela)}</td>                                           
                                            <td className={'camposDetalhes'}> {item.situacao}</td>                                           
                                        </tr>
                                    );
                                })

                            }

                        </tbody>

                    </table>
                    { <JwPagination items={detalhes} labels={customLabels} onChangePage={pagina=> setItens(pagina)} /> }
                </div>
            </article>
        </section>
    );
}