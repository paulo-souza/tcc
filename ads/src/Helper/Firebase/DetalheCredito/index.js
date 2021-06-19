import { database } from '../../../Service/Firebase';

export default async function getDetalhesCredito(uidCredito) {
    
    await database.ref('detalhe_credito').once('value').then(snapshot=> {
        let detalheCreditos = [];

        snapshot.forEach(detalhe=> {

            if(uidCredito === detalhe.val().uidCredito) {
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

       let detalhes_credito = detalheCreditos.sort((a, b) => Number(a.numero_parcela) > Number(b.numero_parcela) ? 1 : -1);
       window.sessionStorage.setItem('detalhes_credito', JSON.stringify(detalhes_credito));
    })
    .catch(error=> console.log('Erro ao buscar detalhes dos creditos dos clientes!', error));
    
}

export async function atualizarDetalheCredito(detalhe_credito) {
    await database.ref('detalhe_credito').child(detalhe_credito.uid).update(detalhe_credito)
    .then(() => {
        console.log('detalhe_credito atualizado com sucesso!');            
    })
    .catch(error => {
        console.log(`Erro ao atualizar o detalhe_credito de uid: ${detalhe_credito.uid}, erro => ${error}, error.code => ${error.code}`);
    });
}