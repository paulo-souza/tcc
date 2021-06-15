import { database } from '../../../Service/Firebase';

export default async function getPessoasFisica(path, setState) {
  
    await database.ref(path).once('value').then(snapshot=> {
        let pessoasFisica = new Map();

        snapshot.forEach(pessoasUid=> {                
            let pessoa = pessoasUid.val();
            let uidPessoa = pessoasUid.key;
            
            pessoasFisica.set(uidPessoa, Object.values(pessoa)); 
            
        });

        setState(pessoasFisica);
    })
    .catch(error=> console.log(`Erro ao buscar pessoas físicas -- error => ${error} -- error.code => ${error.code}`));
    
   
}