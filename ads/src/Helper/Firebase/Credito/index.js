import { database } from '../../../Service/Firebase';

export default async function getCredito(uidCliente, setCredito) {
    
    await database.ref('credito').child(uidCliente).once('value').then(snapshot=> {
        setCredito({
            data_parcela1: snapshot.val().data_parcela1,
            uid: snapshot.val().uid,
            operacao_credito: snapshot.val().operacao_credito,
            tipo_juros: snapshot.val().tipo_juros,
            valor_emprestimo: snapshot.val().valor_emprestimo,
            taxa_juros: snapshot.val().taxa_juros,
            prazo: snapshot.val().prazo,
            qtd_prazo: snapshot.val().qtd_prazo
        });
    })
    .catch(error=> console.log('Erro ao buscar creditos dos clientes!', error));
  
}