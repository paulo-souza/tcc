import { database } from '../../../Service/Firebase';

export default async function getPessoasFisica(path, setState) {
    try {
        await database.ref(path).on('value', snapshot=> {
            let pessoasFisica = new Map();

            snapshot.forEach(pessoasUid=> {                
                let pessoa = pessoasUid.val();
                let uidPessoa = pessoasUid.key;
               
                pessoasFisica.set(uidPessoa, Object.values(pessoa)); 
                
            });

            setState(pessoasFisica);
        });
    
    } catch (error) {
        console.log(`Error ao pessoas física - ${error} - error.code => ${error.code}`);
    }

}