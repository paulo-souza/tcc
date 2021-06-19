import { database } from '../../../Service/Firebase';

export default async function busqueEndereco(path, uid) {
    
    await database.ref(path).child(uid).once('value').then(snapshot=> {
        let endereco = {
            uid: snapshot.key,
            imovel_proprio: snapshot.val().imovel_proprio,
            cep: snapshot.val().cep,
            uf: snapshot.val().uf,
            cidade: snapshot.val().cidade,
            logradouro: snapshot.val().logradouro,
            complemento: snapshot.val().complemento,
            bairro: snapshot.val().bairro,
            numero: snapshot.val().numero
        };
        window.sessionStorage.setItem(path, JSON.stringify(endereco));
    })
    .catch(error=> console.log('Erro ao buscar endereços!', error));
}

export async function atualizarEndereco(path, endereco, history) {
    await database.ref(path).child(endereco.uid).update(endereco)
    .then(()=> {
        console.log('endereco atualizado com sucesso!');
        history.goBack();
    })
    .catch(error => console.log(`Erro ao atualizar o endereco de uid: ${endereco.uid}, erro => ${error}, error.code => ${error.code}`));
}

export async function getAllEnderecosAvalistas(setTodosEnderecoAvalista) {
    await database.ref('endereco_avalista').once('value').then(snapshot => {
        let enderecos = new Map();

        snapshot.forEach(endereco=> {
            let enderecoObtido = {
                uid: endereco.key,
                imovel_proprio: endereco.val().imovel_proprio,
                cep: endereco.val().cep,
                uf: endereco.val().uf,
                cidade: endereco.val().cidade,
                logradouro: endereco.val().logradouro,
                complemento: endereco.val().complemento,
                bairro: endereco.val().bairro,
                numero: endereco.val().numero,
            };
            
            enderecos.set(endereco.key, enderecoObtido);
        });
        setTodosEnderecoAvalista(enderecos);
    })
    .catch(error=> console.log('Erro ao obter endereços de todos avalistas', error));
}