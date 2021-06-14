import { database } from '../../../Service/Firebase';

export default async function getCreditos(setCreditos) {
    
    await database.ref('credito').once('value').then(creditosObtidos=> {
        let creditos = [];

        creditosObtidos.forEach(credito=> {
            creditos.push({
                uidCliente: credito.key,
                uid: credito.val().uid,
                operacao_credito: credito.val().operacao_credito,
                tipo_juros: credito.val().tipo_juros,
                valor_emprestimo: credito.val().valor_emprestimo,
                taxa_juros: credito.val().taxa_juros,
                prazo: credito.val().prazo,
                qtd_prazo: credito.val().qtd_prazo
            });
        });

        setCreditos(creditos);
    })
    .catch(error=> console.log('Erro ao buscar creditos dos clientes!', error));
}