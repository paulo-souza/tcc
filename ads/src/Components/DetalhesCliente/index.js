import React, {useEffect, useCallback, useState } from 'react';
import { detalheCreditoDefault, creditoDefault } from '../../Helper/ObjetoDefault';
import SomenteNumeros from '../../Helper/Utilidades/SomenteNumeros';
import ParseToMoedaBRL from '../../Helper/Utilidades/ParseToMoedaBRL';
import ParseToDate from '../../Helper/Utilidades/ParseToDate';
import { customLabels } from '../../Helper/ObjetoDefault';
import JwPagination from 'jw-react-pagination';
import { atualizarCliente } from '../../Helper/Firebase/Cliente';
import { atualizarDetalheCredito } from '../../Helper/Firebase/DetalheCredito';
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
    
    const [detalheCredito, setDetalheCredito] = useState({situacao: 'pago', numero_parcela: null});
    const [credito, setCredito] = useState(creditoDefault);
    const [detalhes, setDetalhes] = useState([]);
    const [itens, setItens] = useState([]);

    useEffect(()=> {        
        let detalhesCreditoCache = window.sessionStorage.getItem('detalhes_credito');
        let detalhesCreditoCacheJSON = detalhesCreditoCache ? JSON.parse(detalhesCreditoCache) : [];
        setDetalhes(detalhesCreditoCacheJSON);

        let creditoCache = window.sessionStorage.getItem('credito');
        let creditoCacheJSON = creditoCache ? JSON.parse(creditoCache) : creditoDefault;
        setCredito(creditoCacheJSON);

    }, []);

  
    const ajustaDetalheCredito = useCallback(event => {
        const { name, value } = event.target;

        detalheCredito[name] = value;
        setDetalheCredito({ ...detalheCredito });

    }, [detalheCredito]);


    function alterarSituacaoPagamento() {
        let dataDeHoje = new Date(Date.now());
        const {numero_parcela, situacao } = detalheCredito;
        //O estado pendente já está quando é gerado as parcelas
       
        let situacaoCliente = 'pendente';

        if(situacao === 'pago'){
            if(detalhes.some(p=> (p.situacao === 'inadimplente') && (p.numero_parcela === numero_parcela))) {
                 if(detalhes.some(p=> (p.situacao === 'pendente') && (ParseToDate(p.data_vencimento) < dataDeHoje))){
                    situacaoCliente = 'pendente';
                 }else{
                     situacaoCliente = 'pago';
                 }
                
            }else {
                if(detalhes.some(p=> (p.situacao === 'pendente') && (ParseToDate(p.data_vencimento) < dataDeHoje) && (p.numero_parcela !== numero_parcela))) {
                    situacaoCliente = 'pendente';
                } else {
                    situacaoCliente = 'pago';
                }
            }
        } else {
            if((!detalhes.some(p=> (p.situacao === 'pendente') && (ParseToDate(p.data_vencimento) < dataDeHoje)))) {
                console.log('Não é possível alterar o estado do cliente para inadimplente se ele está com todos as parcelas em dia');
                return;
            }
            
            situacaoCliente = 'inadimplente';
        } 

            
        let cliente = JSON.parse(window.sessionStorage.getItem('cliente'));    
        cliente.pagamento = situacaoCliente;
        atualizarCliente(cliente, null);

        //Atualiza o estado da parcela no firebase
        
        let parcelaObtida = detalhes.find(d=> d.numero_parcela == detalheCredito.numero_parcela);
        parcelaObtida.situacao = detalheCredito.situacao;

        atualizarDetalheCredito(parcelaObtida);
       
    }


    return (
        <section id={'section7'}>
            <input type={'radio'} name={'sections'} id={'option7'} />
            <label className={'labelTabs'} htmlFor={'option7'}>Detalhes</label>

            <article>
                <div className={'containerDetalheCredito'}>
                    <span className={'detalhesCredito'}>Valor empréstimo: <strong>{ParseToMoedaBRL(credito.valor_emprestimo)}</strong></span>
                    <span className={'detalhesCredito'}>Tipo de juros: <strong>{credito.operacao_credito}</strong></span>
                    <span className={'detalhesCredito'}>Taxa de juros: <strong>{credito.taxa_juros}%</strong></span>
                    <span className={'detalhesCredito'}>Parcelas: {detalhes.length} por {getTipoPrazo(credito.prazo)}</span>
                </div>



                <label htmlFor={'numero_parcela'}>Nr Parcela</label>
                <input id={'numero_parcela'} name={'numero_parcela'} value={detalheCredito.numero_parcela} min={1} max={detalhes.length}
                    type={'number'} placeholder={'ex.: 12'} onChange={ajustaDetalheCredito} onKeyPress={SomenteNumeros} />

                <div>
                    <label htmlFor={'situacao'}>Pagamento</label>
                    <select name={'situacao'} id={'situacao'} value={detalheCredito.situacao} onChange={ajustaDetalheCredito}>
                        <option value={'pago'}>Em dia</option>                       
                        <option value={'inadimplente'}>Inadimplente</option>
                    </select>
                </div>

                <div id={'divBtnSituacao'}>
                    <button id={'btnSituacao'} type={'button'} onClick={alterarSituacaoPagamento}>Alterar Situação</button>
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