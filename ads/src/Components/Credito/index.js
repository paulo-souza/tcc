import React, {useState, useContext, useCallback } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import SomenteNumeros from '../../Utilidades/SomenteNumeros';
import ParseToMoedaBRL, { ParseToMoedaUSA, ParseToNumber} from '../../Utilidades/ParseToMoedaBRL';

export default function Credito() {
    const { credito, setCredito } = useContext(ClienteContext);
    let [valorParcela, setValorParcela] = useState(null);
    let [montante, setMontante] = useState(null);

    const ajustaCredito = useCallback(event => {
        const { name, value } = event.target;

        credito[name] = value;
        setCredito({ ...credito });
        
        if(camposEstaoPreenchidos()) {            
            let valor_emprestimo = ParseToMoedaUSA(credito.valor_emprestimo);
            let taxa_juros = ParseToMoedaUSA(credito.taxa_juros);
            let qtd_prazo = ParseToMoedaUSA(credito.qtd_prazo);
            let juros = 0;
            let capitalEJuros = 0;

            if(credito.tipo_juros === 'simples'){

                juros = ParseToNumber(valor_emprestimo) * ParseToNumber(taxa_juros) / 100 * ParseToNumber(qtd_prazo);
                
                capitalEJuros = ParseToNumber(valor_emprestimo) + juros;

                valorParcela = capitalEJuros / ParseToNumber(qtd_prazo);
                montante = capitalEJuros;
                

            } else{
                qtd_prazo = ParseToNumber(qtd_prazo);
                montante = ParseToNumber(valor_emprestimo) * (1 + ParseToNumber(taxa_juros)/100) ** qtd_prazo;
                valorParcela = montante / qtd_prazo;
            }

            setValorParcela(ParseToMoedaBRL(valorParcela));
            setMontante(ParseToMoedaBRL(montante));
        }
    }, [credito]);
    
    const camposEstaoPreenchidos = () => {

        return credito.valor_emprestimo &&
               credito.taxa_juros &&
               credito.qtd_prazo;
    }

    return (
        <section id={'section6'}>
            <input type={'radio'} name={'sections'} id={'option6'} />
            <label className={'labelTabs'} htmlFor={'option6'}>Crédito</label>

            <article>
                <div>
                    <label htmlFor={'operacao_credito'}>Operação de crédito*</label>
                </div>

                <select name={'operacao_credito'} id={'operacao_credito'}
                    value={credito.operacao_credito} onChange={ajustaCredito}>
                    <option value={'emprestimo'}>Empréstimo</option>
                    <option value={'financiamento'}>Financiamento</option>
                    <option value={'desconto'}>Desconto de título</option>
                </select>

                <div>
                    <label htmlFor={'tipo_juros'}>Tipo de Juros*</label>
                </div>

                <select name={'tipo_juros'} id={'tipo_juros'}
                    value={credito.tipo_juros} onChange={ajustaCredito}>
                    <option value={'simples'}>Simples</option>
                    <option value={'composto'}>Composto</option>
                </select>

                <label htmlFor={'valor_emprestimo'}>Valor empréstimo <strong>R$*</strong></label>
                <input id={'valor_emprestimo'} name={'valor_emprestimo'} value={credito.valor_emprestimo}
                    type={'text'} placeholder={'ex.: R$ 10.000,00'} onChange={ajustaCredito} onKeyPress={SomenteNumeros} />

                <label htmlFor={'taxa_juros'}>Taxa de juros <strong>%*</strong></label>
                <input id={'taxa_juros'} name={'taxa_juros'} value={credito.taxa_juros} min={0}
                    type={'number'} placeholder={'ex.: 10%'} onChange={ajustaCredito} onKeyPress={SomenteNumeros} />

                <div style={{height: 62, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 25}}>
                    <div style={{width: '20%'}}>
                        <label htmlFor={'qtd_prazo'}>Em quantas vezes?</label>
                        <input id={'qtd_prazo'} name={'qtd_prazo'} value={credito.qtd_prazo} onKeyPress={SomenteNumeros}
                            type={'number'} placeholder={'ex.: 3x'} onChange={ajustaCredito} min={0} />
                    </div>

                    <div style={{height: 67.5, flex: 1, marginLeft: 40}}>
                        <div>
                            <label htmlFor={'prazo'}>Prazo*</label>
                        </div>

                        <select name={'prazo'} id={'prazo'} value={credito.prazo} onChange={ajustaCredito}>
                            <option value={'mensal'}>Mensal</option>
                            <option value={'trimestral'}>Trimestral</option>
                            <option value={'semestral'}>Semestral</option>
                            <option value={'anual'}>Anual</option>
                        </select>
                    </div>
                </div>

                <label htmlFor={'valor_parcela'}>Valor parcela <strong>R$*</strong></label>
                <input id={'valor_parcela'} name={'valor_parcela'} value={valorParcela}
                    type={'text'} placeholder={'Valor da parcela + juros'} disabled />

                <label htmlFor={'montante'}>Montante <strong>R$*</strong></label>
                <input id={'montante'} name={'montante'} value={montante}
                    type={'text'} placeholder={'Valor do Empréstimo + Juros acumulados'}  disabled />
            </article>
        </section>
    );
}