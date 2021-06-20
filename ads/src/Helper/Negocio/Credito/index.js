import { ParseToNumber } from '../../Utilidades/ParseToMoedaBRL';

export function atualizarParcelas(parcelas, credito) {
    let juros = 0;
    let montante = 0;
    let valorCadaParcela = 0;
    let valor_emprestimo = ParseToNumber(credito.valor_emprestimo);
    let taxa_juros = ParseToNumber(credito.taxa_juros) / 100; 
    let qtd_prazo = ParseToNumber(credito.qtd_prazo);

    if(credito.tipo_juros === 'simples') {
        juros = valor_emprestimo * taxa_juros * qtd_prazo;
        montante = valor_emprestimo + juros;        

    }else {
        montante = valor_emprestimo * ( 1 + taxa_juros ) ** qtd_prazo;
        juros = montante - valor_emprestimo; 
    }
   
    valorCadaParcela = montante / qtd_prazo;
    
    let dataParcela = new Date(`${credito.data_parcela1} 00:01:00`);

    parcelas.forEach(parcela=> {
        
        parcela.tipo_credito = credito.operacao_credito;
        parcela.valor_parcela = valorCadaParcela.toFixed(2);

        if(parcela.numero_parcela == 1) {
            parcela.data_vencimento = credito.data_parcela1;
        } else {
            if(credito.prazo === 'mensal' || credito.prazo === 'trimestral' || credito.prazo === 'semestral'){
                let tempo = 1;
                if(credito.prazo === 'trimestral') tempo = 3;
                if(credito.prazo === 'semestral') tempo = 6;

                dataParcela = new Date(dataParcela.setMonth(dataParcela.getMonth() + tempo));
                
            }else{
                dataParcela = new Date(dataParcela.setFullYear(dataParcela.getFullYear() + 1));
            }

            parcela.data_vencimento = dataParcela.toLocaleDateString('en-CA');

        }    

    });

    return [...parcelas];
}