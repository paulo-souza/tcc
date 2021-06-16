import { database } from '../../../Service/Firebase';

export default async function getCreditos(setTodosCreditos, setEstaCarregando) {
    
    await database.ref('credito').once('value').then(creditosObtidos=> {
        let creditos = new Map();

        creditosObtidos.forEach(creditoObtido=> {
            if(creditoObtido) {
                let credito = {
                    data_parcela1: creditoObtido.val().data_parcela1,
                    uid: creditoObtido.val().uid,
                    operacao_credito: creditoObtido.val().operacao_credito,
                    tipo_juros: creditoObtido.val().tipo_juros,
                    valor_emprestimo: creditoObtido.val().valor_emprestimo,
                    taxa_juros: creditoObtido.val().taxa_juros,
                    prazo: creditoObtido.val().prazo,
                    qtd_prazo: creditoObtido.val().qtd_prazo
                };

                creditos.set(creditoObtido.key, credito)
            }            
        });

        setTodosCreditos(creditos);
    })
    .catch(error=> console.log('Erro ao buscar creditos dos clientes!', error))
    .finally(()=> setEstaCarregando(false));
}