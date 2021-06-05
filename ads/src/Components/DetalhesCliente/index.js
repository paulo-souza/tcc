import React from 'react';

export default function DetalhesCliente(props) {
    return (
        <section id={'section7'}>
            <input type={'radio'} name={'sections'} id={'option7'} />
            <label className={'labelTabs'} htmlFor={'option7'}>Detalhes</label>

            <article>

                <div>
                    <label htmlFor={'pagamento'}>Pagamento</label>
                    <select name={'pagamento'} id={'pagamento'}>
                        <option value={'ok'} selected={true}>Em dia</option>
                        <option value={'pendente'} selected={false}>Pendente</option>
                        <option value={'inadimplente'} selected={false}>Inadimplente</option>
                    </select>
                </div>


                <div>
                    <label htmlFor={'tipoJuros'}>Tipo de Juros*</label>
                </div>

                <select name={'tipoJuros'} id={'tipoJuros'}>
                    <option value={'simples'} selected={true}>Simples</option>
                    <option value={'composto'} selected={false}>Composto</option>
                </select>

                <label htmlFor={'valorEmprestimo'}>Valor empréstimo <strong>R$*</strong></label>
                <input id={'valorEmprestimo'} name={'valorEmprestimo'} value={''}
                    type={'text'} disabled />

                <label htmlFor={'taxaJuros'}>Taxa de juros <strong>%*</strong></label>
                <input id={'taxaJuros'} name={'taxaJuros'} value={''} type={'text'} disabled />

                <label htmlFor={'prazoDetalhe'}>Prazo</label>
                <input id={'prazoDetalhe'} name={'prazoDetalhe'} value={''} type={'text'} placeholder={'1 semestre(s)'} disabled />

                //TODO Tabela de histórico da situação
            </article>
        </section>
    );
}