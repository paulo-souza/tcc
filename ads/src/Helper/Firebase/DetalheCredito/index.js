import { database } from '../../../Service/Firebase';

export default async function getDetalheCreditos(credito, setDetalhesCredito) {
    
    await database.ref('detalhe_credito').once('value').then(detalhesObtidos=> {
        let detalheCreditos = [];

        detalhesObtidos.forEach(detalhe=> {

            if(credito.uid === detalhe.val().uidCredito) {
                detalheCreditos.push({
                    numero_parcela: detalhe.val().numero_parcela,
                    tipo_credito: detalhe.val().tipo_credito,
                    data_vencimento: detalhe.val().data_vencimento,
                    valor_parcela: detalhe.val().valor_parcela,
                    valor_pago: detalhe.val().valor_pago,
                    situacao: detalhe.val().situacao,
                    uidCredito: detalhe.val().uidCredito,
                    uid: detalhe.key
                });

            }
        });

        setDetalhesCredito(detalheCreditos.sort((a, b) => Number(a.numero_parcela) > Number(b.numero_parcela) ? 1 : -1));
    })
    .catch(error=> console.log('Erro ao buscar detalhes dos creditos dos clientes!', error));
    
}