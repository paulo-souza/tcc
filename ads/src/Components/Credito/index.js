import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { creditoDefault } from '../../Helper/ObjetoDefault';
import ParseToMoedaBRL, { ParseToMoedaUSA, ParseToNumber } from '../../Helper/Utilidades/ParseToMoedaBRL';
import ParseToDate from '../../Helper/Utilidades/ParseToDate';

const styles = {
    row: {
        marginBottom: 10
    }
};

export default function Credito() {
    const { uidCliente } = useParams();

    const [credito, setCredito] = useState(creditoDefault);
    const [montanteState, setMontanteState] = useState(0);

    useEffect(() => {
        let creditoCache = window.sessionStorage.getItem('credito');
        let creditoCacheJSON = creditoCache ? JSON.parse(creditoCache) : creditoDefault;
        setCredito(creditoCacheJSON);
    }, []);

    const dadosParaCalcularJuros = {
        valor_emprestimo: ParseToMoedaUSA(credito.valor_emprestimo),
        taxa_juros: ParseToMoedaUSA(credito.taxa_juros),
        qtd_prazo: ParseToMoedaUSA(credito.qtd_prazo)
    };

    const calculaMontanteJurosSimples = useCallback(() => {
        const { valor_emprestimo, taxa_juros, qtd_prazo } = dadosParaCalcularJuros;
        let juros = ParseToNumber(valor_emprestimo) * ParseToNumber(taxa_juros) / 100 * ParseToNumber(qtd_prazo);

        let montanteObtido = (ParseToNumber(valor_emprestimo) + juros);
        setMontanteState(montanteObtido);

        return ParseToMoedaBRL(montanteObtido);

    }, [credito]);

    const calculaMontanteJurosComposto = useCallback(() => {
        const { valor_emprestimo, taxa_juros, qtd_prazo: qtd } = dadosParaCalcularJuros;
        let qtd_prazo = ParseToNumber(qtd);

        let montanteObtido = (ParseToNumber(valor_emprestimo) * (1 + ParseToNumber(taxa_juros) / 100) ** qtd_prazo);
        setMontanteState(montanteObtido);

        return ParseToMoedaBRL(montanteObtido);

    }, [credito]);

    const montante = useMemo(() => {
        let calcularMontante = credito.tipo_juros === 'simples' ? calculaMontanteJurosSimples : calculaMontanteJurosComposto;
        return calcularMontante();
    }, [credito]);

    const valorCadaParcela = useMemo(() => {
        const { qtd_prazo } = dadosParaCalcularJuros;

        let valorObtido = (montanteState / ParseToNumber(qtd_prazo));

        return ParseToMoedaBRL(valorObtido);

    }, [dadosParaCalcularJuros, montanteState]);

    const valorEmprestimo = useMemo(()=> ParseToMoedaBRL(credito.valor_emprestimo), [credito]);
   
    const btnCredito = (
        uidCliente ? <Link className={'btnEditar'} to={`/Clientes/Editar/${uidCliente}/Credito`} title={'Editar credito'}>Editar</Link>
            :
            <Link className={'btnNovoCliente'} to={'/Clientes/Novo/Credito'} title={'Novo credito'}>Novo</Link>
    );

    return (
        <section id={'section6'}>
            <input type={'radio'} name={'sections'} id={'option6'} />
            <label className={'labelTabs'} htmlFor={'option6'}>Crédito</label>

            <article>
                <div className={'containerClienteSubTitulo'}>
                    <h3>Crédito*</h3>
                    {btnCredito}
                </div>
                <hr />

                {
                    credito.uid &&
                    <div className={'containerVisualizarCampos'}>
                        <span style={styles.row}>
                            <strong>Tipo:</strong> 
                            {credito.operacao_credito}
                        </span>
                        
                        <span style={styles.row}>
                            <strong>Juros:</strong> 
                            {credito.tipo_juros} 
                        </span>

                        <span style={styles.row}>
                            <strong>Valor do empréstimo:</strong>
                            {valorEmprestimo} 
                        </span>

                        <span style={styles.row}>
                            <strong>Taxa de Juros:</strong>
                            {credito.taxa_juros}%
                        </span>

                        <span style={styles.row}>
                            <strong>Prazo:</strong>
                            {`${credito.qtd_prazo}x ${credito.prazo}`}               
                        </span>

                        <span style={styles.row}>
                            <strong>Data 1ª Parcela:</strong> 
                            { ParseToDate(credito.data_parcela1).toLocaleDateString() }
                        </span>

                        <span style={styles.row}>
                            <strong>Valor cada Parcela:</strong> 
                            {valorCadaParcela}
                        </span>

                        <span style={styles.row}>
                            <strong>Montante:</strong> 
                            {montante} 
                        </span>
                    </div>
                }


               { credito.uid && <hr /> }
            </article>
        </section>
    );
}