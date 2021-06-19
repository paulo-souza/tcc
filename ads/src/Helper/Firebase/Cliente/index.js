import { database } from '../../../Service/Firebase';

export default async function getClientes(setClientes, setClientesView, setEstaCarregando) {

    setEstaCarregando(true);

    await database.ref('cliente').on('value', snapshot => {
        let clientes = [];

        snapshot.forEach(snapshot => {
            if (snapshot) {
                let cliente = {
                    uid: snapshot.key,
                    data_registro: snapshot.val().data_registro,
                    razao_social: snapshot.val().razao_social,
                    nome_fantasia: snapshot.val().nome_fantasia,
                    cnae: snapshot.val().cnae,
                    cnpj: snapshot.val().cnpj,
                    inscricao_municipal: snapshot.val().inscricao_municipal,
                    inscricao_estadual: snapshot.val().inscricao_estadual,
                    situacao_empresa: snapshot.val().situacao_empresa,
                    natureza_juridica: snapshot.val().natureza_juridica,
                    porte_empresa: snapshot.val().porte_empresa,
                    pagamento: snapshot.val().pagamento
                };

                clientes = [...clientes, cliente];
            }

        });

        setClientes(clientes);
        setClientesView(clientes);
        setEstaCarregando(false);
    });

}

export async function busqueCliente(uid) {
    await database.ref('cliente').child(uid).once('value').then(snapshot => {
        let cliente = {
            uid: snapshot.key,
            data_registro: snapshot.val().data_registro,
            razao_social: snapshot.val().razao_social,
            nome_fantasia: snapshot.val().nome_fantasia,
            cnae: snapshot.val().cnae,
            cnpj: snapshot.val().cnpj,
            inscricao_municipal: snapshot.val().inscricao_municipal,
            inscricao_estadual: snapshot.val().inscricao_estadual,
            situacao_empresa: snapshot.val().situacao_empresa,
            natureza_juridica: snapshot.val().natureza_juridica,
            porte_empresa: snapshot.val().porte_empresa,
            pagamento: snapshot.val().pagamento
        };

        window.sessionStorage.setItem('cliente', JSON.stringify(cliente));
    })
        .catch(error => console.log(`Erro ao Buscar o cliente de uid: ${uid}, erro => ${error}, error.code => ${error.code}`));
}

export async function atualizarCliente(cliente, history) {
    await database.ref('cliente').child(cliente.uid).update(cliente)
        .then(() => {
            console.log('cliente atualizado com sucesso!');
            history && history.goBack();
        })
        .catch(error => console.log(`Erro ao atualizar o cliente de uid: ${cliente.uid}, erro => ${error}, error.code => ${error.code}`));
}
