import { database } from '../../../Service/Firebase';

export default async function getEnderecos(path, setEnderecos) {
    
    await database.ref(path).once('value').then(enderecosObtidos=> {
        let enderecos = [];

        enderecosObtidos.forEach(enderecoObtido=> {
            let endereco = {
                uid: enderecoObtido.key,
                imovel_proprio: enderecoObtido.val().imovel_proprio,
                cep: enderecoObtido.val().cep,
                uf: enderecoObtido.val().uf,
                cidade: enderecoObtido.val().cidade,
                logradouro: enderecoObtido.val().logradouro,
                complemento: enderecoObtido.val().complemento,
                bairro: enderecoObtido.val().bairro,
                numero: enderecoObtido.val().numero
            };
            
            enderecos = [...enderecos, endereco];
        });

        setEnderecos(enderecos);
    })
    .catch(error=> console.log('Erro ao buscar endereços!', error));
}