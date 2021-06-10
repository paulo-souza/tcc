import React, { useContext, useCallback } from 'react';
import { ClienteContext } from '../../Context/ClienteProvider';
import SomenteNumeros from '../../Utilidades/SomenteNumeros';

export default function Credito() {
    const { credito, setCredito } = useContext(ClienteContext);

    const ajustaCredito = useCallback(event => {
        const { name, value } = event.target;

        credito[name] = value;
        setCredito({ ...credito });

        console.log('====================================');
        console.log('credito:', credito);
        console.log('====================================');
    }, [credito]);
    

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

                <div>
                    <label htmlFor={'prazo'}>Prazo*</label>
                </div>

                <select name={'prazo'} id={'prazo'} value={credito.prazo} onChange={ajustaCredito}>
                    <option value={'anual'}>Anual</option>
                    <option value={'mensal'}>Mensal</option>
                    <option value={'trimestral'}>Trimestral</option>
                    <option value={'semestral'}>Semestral</option>
                </select>

                <label htmlFor={'qtd_prazo'}>QTD Prazo*</label>
                <input id={'qtd_prazo'} name={'qtd_prazo'} value={credito.qtd_prazo} onKeyPress={SomenteNumeros}
                    type={'number'} placeholder={'ex.: 3 meses'} onChange={ajustaCredito} min={0} />

                <label htmlFor={'montante'}>Montante <strong>R$*</strong></label>
                <input id={'montante'} name={'montante'} value={credito.montante} onKeyPress={SomenteNumeros}
                    type={'text'} placeholder={'ex.: R$ 10.550,00'} onChange={ajustaCredito} />
            </article>
        </section>
    );
}