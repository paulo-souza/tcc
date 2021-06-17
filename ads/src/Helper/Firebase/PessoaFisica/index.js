import { database } from '../../../Service/Firebase';

export default async function getPessoasFisica(path, uid, setPessoas) {
  
    await database.ref(path).child(uid).once('value').then(snapshot=> {
        let pessoasFisica = [];

        snapshot.forEach(pessoaObtida=> { 
           const {numero, orgao_expedidor, uf_expedidor} = pessoaObtida.val().rg;

           let pessoa = {
                uid: pessoaObtida.key,
                nome: pessoaObtida.val().nome,
                data_nascimento: pessoaObtida.val().data_nascimento,
                uf_nascimento: pessoaObtida.val().uf_nascimento,
                naturalidade: pessoaObtida.val().naturalidade,
                sexo: pessoaObtida.val().sexo,
                estado_civil: pessoaObtida.val().estado_civil,
                conjuge: pessoaObtida.val().conjuge,
                cpf: pessoaObtida.val().cpf,
                rg: { numero: numero, orgao_expedidor: orgao_expedidor, uf: uf_expedidor},
                mae: pessoaObtida.val().mae,
                pai: pessoaObtida.val().pai
            };
            
            pessoasFisica = [...pessoasFisica, pessoa];            
        });

        setPessoas(pessoasFisica);
    })
    .catch(error=> console.log(`Erro ao buscar pessoas físicas -- error => ${error} -- error.code => ${error.code}`));
    
   
}