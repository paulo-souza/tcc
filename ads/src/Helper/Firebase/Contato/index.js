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