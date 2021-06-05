import React from 'react';

export default function Credito(props) {
    return (
        <section id={'section6'}>
            <input type={'radio'} name={'sections'} id={'option6'} />
            <label className={'labelTabs'} htmlFor={'option6'}>Crédito</label>

            <article>
                <div>
                    <label htmlFor={'opCredito'}>Operação de crédito*</label>
                </div>

                <select name={'opCredito'} id={'opCredito'}>
                    <option value={'emprestimo'} selected={true}>Empréstimo</option>
                    <option value={'financiamento'} selected={false}>Financiamento</option>
                    <option value={'desconto'} selected={false}>Desconto de título</option>
                </select>

                <div>
                    <label htmlFor={'tipoJuros'}>Tipo de Juros*</label>
                </div>

                <select name={'tipoJuros'} id={'tipoJuros'}>
                    <option value={'simples'} selected={true}>Simples</option>
                    <option value={'composto'} selected={false}>Composto</option>
                </select>

                <label htmlFor={'valorEmprestimo'}>Valor empréstimo <strong>R$*</strong></label>
                <input id={'valorEmprestimo'} name={'valorEmprestimo'} value={''} type={'text'} placeholder={'ex.: R$ 10.000,00'} />

                <label htmlFor={'taxaJuros'}>Taxa de juros <strong>%*</strong></label>
                <input id={'taxaJuros'} name={'taxaJuros'} value={''} type={'text'} placeholder={'ex.: 10%'} />

                <div>
                    <label htmlFor={'prazo'}>Prazo*</label>
                </div>

                <select name={'prazo'} id={'prazo'}>
                    <option value={'anual'} selected={true}>Anual</option>
                    <option value={'mensal'} selected={false}>Mensal</option>
                    <option value={'trimestral'} selected={false}>Trimestral</option>
                    <option value={'semestral'} selected={false}>Semestral</option>
                </select>

                <label htmlFor={'qtdPrazo'}>QTD Prazo*</label>
                <input id={'qtdPrazo'} name={'qtdPrazo'} value={''} type={'number'} placeholder={'ex.: 3 meses'} />

                <label htmlFor={'montante'}>Montante <strong>R$*</strong></label>
                <input id={'montante'} name={'montante'} value={''} type={'text'} placeholder={'ex.: R$ 10.550,00'} />
            </article>
        </section>
    );
}