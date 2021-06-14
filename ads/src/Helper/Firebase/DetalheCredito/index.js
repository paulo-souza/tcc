import { database } from '../../../Service/Firebase';

export default async function getDetalheCreditos(setDetalheCreditos, setEstaCarregando) {
    
    await database.ref('detalhe_credito').once('value').then(detalhesObtidos=> {
        let detalheCreditos = [];

        detalhesObtidos.forEach(detalhe=> {
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
        });

        setDetalheCreditos(detalheCreditos);
    })
    .catch(error=> console.log('Erro ao buscar detalhes dos creditos dos clientes!', error))
    .finally(()=> setEstaCarregando(false));
}