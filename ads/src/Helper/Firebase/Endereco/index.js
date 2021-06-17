import { database } from '../../../Service/Firebase';

export default async function getEndereco(path, uid, setEndereco) {
    
    await database.ref(path).child(uid).once('value').then(snapshot=> {
        setEndereco({
            uid: snapshot.key,
            imovel_proprio: snapshot.val().imovel_proprio,
            cep: snapshot.val().cep,
            uf: snapshot.val().uf,
            cidade: snapshot.val().cidade,
            logradouro: snapshot.val().logradouro,
            complemento: snapshot.val().complemento,
            bairro: snapshot.val().bairro,
            numero: snapshot.val().numero
        });
            
    })
    .catch(error=> console.log('Erro ao buscar endereços!', error));
}