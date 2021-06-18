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