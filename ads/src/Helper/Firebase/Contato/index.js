import { database } from '../../../Service/Firebase';

export default async function busqueContato(path, uid) {
    
    await database.ref(path).child(uid).once('value').then( snapshot=> {
        
        let contato = {
            uid: snapshot.key,
            email1: snapshot.val().email1,
            email2: snapshot.val().email2,
            telefone1: snapshot.val().telefone1,
            telefone2: snapshot.val().telefone2,
            celular1: snapshot.val().celular1,
            celular2: snapshot.val().celular2
        };
        
        window.sessionStorage.setItem(path, JSON.stringify(contato));
    })
    .catch(error=> console.log('Erro ao buscar o contato!', error));
}

export async function getAllContatosAvalistas(setTodosContatosAvalista) {
    await database.ref('contato_avalista').once('value').then( snapshot => {
        let contatos = new Map();

        snapshot.forEach(contato=> {
            let contatoObtido = {
                uid: contato.key,
                email1: contato.val().email1,
                email2: contato.val().email2,
                telefone1: contato.val().telefone1,
                telefone2: contato.val().telefone2,
                celular1: contato.val().celular1,
                celular2: contato.val().celular2
            };
            contatos.set(contato.key, contatoObtido);
        });

        setTodosContatosAvalista(contatos);
    })
    .catch(error => console.log('Error ao obter todos os contatos de avalistas', error));
}