import React, {useState, useEffect, useCallback } from 'react';
import SomenteNumeros from '../../Helper/Utilidades/SomenteNumeros';
import ParseToMoedaBRL, { ParseToMoedaUSA, ParseToNumber} from '../../Helper/Utilidades/ParseToMoedaBRL';

export default function Credito(props) {

    const [valorParcela, setValorParcela] = useState(null);
    const [montante, setMontante] = useState(null);
   
    const [ehParaCalcular, setEhParaCalcular] = useState(false);

    useEffect(()=>{         
        if(props.credito.uid) calculaMontanteEValorCadaParcela();
    }, [props.credito, ehParaCalcular]);


    const camposEstaoPreenchidos = () => {
        let expressao = props.credito.valor_emprestimo && props.credito.taxa_juros && props.credito.qtd_prazo;
        
        if(expressao) return true;
       
        return false;
    }

    const ajustaCredito = useCallback(event => {
        const { name, value } = event.target;

        props.credito[name] = value;
        props.setCredito({ ...props.credito });

        setEhParaCalcular(naoEh=> !naoEh);

    }, [props.credito]); 

    function calculaMontanteEValorCadaParcela() {

            if(!camposEstaoPreenchidos()) return;

            let valor_emprestimo = ParseToMoedaUSA(props.credito.valor_emprestimo);
            let taxa_juros = ParseToMoedaUSA(props.credito.taxa_juros);
            let qtd_prazo = ParseToMoedaUSA(props.credito.qtd_prazo);
            let juros = 0;
            let capitalEJuros = 0;
            let resultadoMontante = 0;
            let resultadoValorParcela = 0;

            if(props.credito.tipo_juros === 'simples'){

                juros = ParseToNumber(valor_emprestimo) * ParseToNumber(taxa_juros) / 100 * ParseToNumber(qtd_prazo);
                
                capitalEJuros = ParseToNumber(valor_emprestimo) + juros;

                resultadoValorParcela = capitalEJuros / ParseToNumber(qtd_prazo);
                resultadoMontante = capitalEJuros;
                

            } else{
                qtd_prazo = ParseToNumber(qtd_prazo);
                resultadoMontante = ParseToNumber(valor_emprestimo) * (1 + ParseToNumber(taxa_juros)/100) ** qtd_prazo;
                resultadoValorParcela = resultadoMontante / qtd_prazo;
            }

            setValorParcela(ParseToMoedaBRL(resultadoValorParcela));
            setMontante(ParseToMoedaBRL(resultadoMontante));
        
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
                    value={props.credito.operacao_credito} onChange={ajustaCredito}>
                    <option value={'emprestimo'}>Empréstimo</option>
                    <option value={'financiamento'}>Financiamento</option>
                    <option value={'desconto'}>Desconto de título</option>
                </select>

                <div>
                    <label htmlFor={'tipo_juros'}>Tipo de Juros*</label>
                </div>

                <select name={'tipo_juros'} id={'tipo_juros'}
                    value={props.credito.tipo_juros} onChange={ajustaCredito}>
                    <option value={'simples'}>Simples</option>
                    <option value={'composto'}>Composto</option>
                </select>

                <label htmlFor={'valor_emprestimo'}>Valor empréstimo <strong>R$*</strong></label>
                <input id={'valor_emprestimo'} name={'valor_emprestimo'} value={props.credito.valor_emprestimo}
                    type={'text'} placeholder={'ex.: R$ 10.000,00'} onChange={ajustaCredito} onKeyPress={SomenteNumeros} />

                <label htmlFor={'taxa_juros'}>Taxa de juros <strong>%*</strong></label>
                <input id={'taxa_juros'} name={'taxa_juros'} value={props.credito.taxa_juros} min={0}
                    type={'number'} placeholder={'ex.: 10%'} onChange={ajustaCredito} onKeyPress={SomenteNumeros} />

                <div style={{height: 62, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 25}}>
                    <div style={{width: '20%'}}>
                        <label htmlFor={'qtd_prazo'}>Em quantas vezes?</label>
                        <input id={'qtd_prazo'} name={'qtd_prazo'} value={props.credito.qtd_prazo} onKeyPress={SomenteNumeros}
                            type={'number'} placeholder={'ex.: 3x'} onChange={ajustaCredito} min={0} />
                    </div>

                    <div style={{height: 67.5, flex: 1, marginLeft: 40}}>
                        <div>
                            <label htmlFor={'prazo'}>Prazo*</label>
                        </div>

                        <select name={'prazo'} id={'prazo'} value={props.credito.prazo} onChange={ajustaCredito}>
                            <option value={'mensal'}>Mensal</option>
                            <option value={'trimestral'}>Trimestral</option>
                            <option value={'semestral'}>Semestral</option>
                            <option value={'anual'}>Anual</option>
                        </select>
                    </div>
                </div>

                <label htmlFor={'data_parcela1'}>Data 1ª parcela*</label>
                <input id={'data_parcela1'} name={'data_parcela1'} value={props.credito.data_parcela1} 
                type={'date'} onChange={ajustaCredito} />

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