import { database } from '../../../Service/Firebase';

export default async function getContatos(path, setContato) {
    
    await database.ref(path).once('value').then( snapshot=> {
       let contatos = [];

        snapshot.forEach(contatoObtido=> {
            let contato = {
                uid: contatoObtido.key,
                email1: contatoObtido.val().email1,
                email2: contatoObtido.val().email2,
                telefone1: contatoObtido.val().telefone1,
                telefone2: contatoObtido.val().telefone2,
                celular1: contatoObtido.val().celular1,
                celular2: contatoObtido.val().celular2
            }
            
            contatos = [...contatos, contato];
        });

        setContato(contatos);
    })
    .catch(error=> console.log('Erro ao buscar o contato!', error));
}