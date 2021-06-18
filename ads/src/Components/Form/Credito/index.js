import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { creditoDefault } from '../../../Helper/ObjetoDefault';
import SomenteNumeros from '../../../Helper/Utilidades/SomenteNumeros';

export default function Credito(props) {
    const history = useHistory();
    const { uidCliente } = useParams();
    const ehNovoCliente = !uidCliente;
    const pathSubNivel = ehNovoCliente ? '/Clientes/Novo' : `/Clientes/Editar/${uidCliente}`;

    const [credito, setCredito] = useState(null);

    useEffect(() => {
        let creditoCache = window.sessionStorage.getItem('credito');
        let creditoCacheJSON = creditoCache ? JSON.parse(creditoCache) : creditoDefault;
        setCredito(creditoCacheJSON);
    }, []);

    const ajustaCredito = useCallback(event => {
        const { name, value } = event.target;

        credito[name] = value;
        setCredito({ ...credito });

    }, [credito]);

    function adicionarOuAtualizar() {

        if (uidCliente) {
            console.log('credito adicionado com sucesso!');
        } else {
            console.log('credito atualizado com sucesso!');
        }

        console.log('====================================');
        console.log('credito => ', credito);
        console.log('====================================');

        history.goBack();
    }

    return (
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <Link to={pathSubNivel} className={'niveis'}>{ehNovoCliente ? 'Novo' : 'Editar'}</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Crédito</span>
            </div>

            {
                credito &&
                <fieldset className={'formulario'}>


                    <legend align={'center'} className={'formulario'}>{ehNovoCliente ? 'Novo Crédito' : 'Editar Crédito'}</legend>

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

                    <div style={{ height: 62, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 25 }}>
                        <div style={{ width: '20%' }}>
                            <label htmlFor={'qtd_prazo'}>Em quantas vezes?</label>
                            <input id={'qtd_prazo'} name={'qtd_prazo'} value={credito.qtd_prazo} onKeyPress={SomenteNumeros}
                                type={'number'} placeholder={'ex.: 3x'} onChange={ajustaCredito} min={0} />
                        </div>

                        <div style={{ height: 67.5, flex: 1, marginLeft: 40 }}>
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

                    <label htmlFor={'data_parcela1'}>Data 1ª parcela*</label>
                    <input id={'data_parcela1'} name={'data_parcela1'} value={credito.data_parcela1}
                        type={'date'} onChange={ajustaCredito} />


                    <button className={'btnSubmit'} type={'button'} title={`${ehNovoCliente ? 'Atualizar' : 'Adicionar'}`} onClick={adicionarOuAtualizar}>
                        {`${ehNovoCliente ? 'Adicionar' : 'Atualizar'}`}
                    </button>
                </fieldset>
            }
        </div>
    );
}