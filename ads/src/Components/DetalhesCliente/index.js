import React, { useEffect, useContext, useCallback, useState } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import { detalheCreditoDefault } from '../../Helper/ObjetoDefault';
import SomenteNumeros from '../../Helper/Utilidades/SomenteNumeros';
import ParseToMoedaBRL from '../../Helper/Utilidades/ParseToMoedaBRL';
import ParseToDate from '../../Helper/Utilidades/ParseToDate';
import { customLabels } from '../../Helper/ObjetoDefault';
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

    const { creditoContext, detalhesCreditoContext, setDetalhesCreditoContext, busqueDetalhesSobreCredito } = useContext(ClienteContext);
    const [passouUmaVez, setPassouUmaVez] = useState(false);
    const[itens, setItens] = useState([]);

    useEffect(() => {
        console.log('detalhesCreditoContext.length ==> ', detalhesCreditoContext.length);

        if (!passouUmaVez && creditoContext?.uid) {
            busqueDetalhesSobreCredito(creditoContext?.uid);
            setPassouUmaVez(true);
        }

    }, [creditoContext, detalhesCreditoContext]);

    const ajustaDetalheCredito = useCallback(event => {
        // const { name, value } = event.target;

        // creditoContext[name] = value;
        // setCredito({ ...creditoContext });


    }, [detalhesCreditoContext]);



    return (
        <section id={'section7'}>
            <input type={'radio'} name={'sections'} id={'option7'} />
            <label className={'labelTabs'} htmlFor={'option7'}>Detalhes</label>

            <article>
                <div className={'containerDetalheCredito'}>
                    <span className={'detalhesCredito'}>Valor empréstimo: <strong>{ParseToMoedaBRL(creditoContext?.valor_emprestimo)}</strong></span>
                    <span className={'detalhesCredito'}>Tipo de juros: <strong>{creditoContext?.operacao_credito}</strong></span>
                    <span className={'detalhesCredito'}>Taxa de juros: <strong>{creditoContext?.taxa_juros}%</strong></span>
                    <span className={'detalhesCredito'}>Parcelas: {detalhesCreditoContext.length} por {getTipoPrazo(creditoContext?.prazo)}</span>
                </div>



                <label htmlFor={'numero_parcela'}>Nr Parcela</label>
                <input id={'numero_parcela'} name={'numero_parcela'} value={creditoContext?.numero_parcela} min={0}
                    type={'number'} placeholder={'ex.: 12'} onChange={ajustaDetalheCredito} onKeyPress={SomenteNumeros} />

                <div>
                    <label htmlFor={'pagamento'}>Pagamento</label>
                    <select name={'pagamento'} id={'pagamento'} onChange={ajustaDetalheCredito}>
                        <option value={'ok'} selected={true}>Em dia</option>
                        <option value={'pendente'} selected={false}>Pendente</option>
                        <option value={'inadimplente'} selected={false}>Inadimplente</option>
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

                                itens.map(detalhe => {
                                   
                                    return (
                                        <tr key={detalhe.uid}>
                                            <td className={'camposDetalhes'}> {detalhe.numero_parcela}</td>
                                            <td className={'camposDetalhes'}> {detalhe.tipo_credito}</td>
                                            <td className={'camposDetalhes'}> {ParseToDate(detalhe.data_vencimento).toLocaleDateString()}</td>
                                            <td className={'camposDetalhes'}> {ParseToMoedaBRL(detalhe.valor_pago)}</td>
                                            <td className={'camposDetalhes'}> {ParseToMoedaBRL(detalhe.valor_parcela)}</td>                                           
                                            <td className={'camposDetalhes'}> {detalhe.situacao}</td>                                           
                                        </tr>
                                    );
                                })

                            }

                        </tbody>

                    </table>
                    { <JwPagination items={detalhesCreditoContext} labels={customLabels} onChangePage={pagina=> setItens(pagina)} /> }
                </div>
            </article>
        </section>
    );
}