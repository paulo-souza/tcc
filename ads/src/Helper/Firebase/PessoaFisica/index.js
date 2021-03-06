import { database } from '../../../Service/Firebase';

export default async function busquePessoasFisica(path, uid) {
  
    await database.ref(path).child(uid).once('value').then(snapshot=> {
        let pessoasFisica = [];

        snapshot.forEach(pessoaObtida=> { 
           const {numero, orgao_expedidor, uf_expedidor: uf} = pessoaObtida.val().rg;

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
                rg: { numero, orgao_expedidor, uf},
                mae: pessoaObtida.val().mae,
                pai: pessoaObtida.val().pai
            };
            
            pessoasFisica = [...pessoasFisica, pessoa];            
        });

        window.sessionStorage.setItem(path, JSON.stringify(pessoasFisica));
    })
    .catch(error=> console.log(`Erro ao buscar pessoas físicas -- error => ${error} -- error.code => ${error.code}`));
   
}

export async function atualizarPessoaFisica(pessoaBD) {
    const {path, uidCliente, pessoa, history} = pessoaBD;

    await database.ref(path).child(uidCliente).child(pessoa.uid).update(pessoa)
    .then(()=> {
        console.log('pessoa atualizado com sucesso!');
        history && history.goBack();
    })
    .catch(error => console.log(`Erro ao atualizar o pessoa de uid: ${pessoa.uid}, erro => ${error}, error.code => ${error.code}`));
}