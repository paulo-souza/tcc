import { database } from '../../../Service/Firebase';

export default async function getClientes(setClientes) {

    try {
        await database.ref('cliente').on('value', snapshot => {
            let clientes = new Map(); 
    
            snapshot.forEach(clienteObtido=> { 
                if(clienteObtido) {
                    let cliente = {
                        uid: clienteObtido.key,
                        data_registro: clienteObtido.val().data_registro,
                        razao_social: clienteObtido.val().razao_social,
                        nome_fantasia: clienteObtido.val().nome_fantasia,
                        cnae: clienteObtido.val().cnae,
                        cnpj: clienteObtido.val().cnpj,
                        inscricao_municipal: clienteObtido.val().inscricao_municipal,
                        inscricao_estadual: clienteObtido.val().inscricao_estadual,
                        situacao_empresa: clienteObtido.val().situacao_empresa,
                        natureza_juridica: clienteObtido.val().natureza_juridica,
                        porte_empresa: clienteObtido.val().porte_empresa,
                        pagamento: clienteObtido.val().pagamento                      
                    };

                    clientes.set(clienteObtido.key, cliente);

                }
    
            });
 
            setClientes(clientes);
        });
    } catch (error) {
        console.log(`Error ao Buscar Todos os clientes - ${error} - error.code => ${error.code}`);
    }        
  
}

