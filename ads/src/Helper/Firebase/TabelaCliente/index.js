import { database } from '../../../Service/Firebase';

export default async function getClientes(setClientes, setEstaCarregando) {

    setEstaCarregando(true);

    try {
        await database.ref('cliente').on('value', snapshot => {
            let clientes = [];
    
            snapshot.forEach(cliente=> {
                if(cliente){
                    clientes.push({
                        uid: cliente.val().uid,
                        data_registro: cliente.val().data_registro,
                        razao_social: cliente.val().razao_social,
                        nome_fantazia: cliente.val().nome_fantazia,
                        cnae: cliente.val().cnae,
                        cnpj: cliente.val().cnpj,
                        inscricao_municipal: cliente.val().inscricao_municipal,
                        inscricao_estadual: cliente.val().inscricao_estadual,
                        situacao_empresa: cliente.val().situacao_empresa,
                        natureza_juridica: cliente.val().natureza_juridica,
                        porte_empresa: cliente.val().porte_empresa
            
                    });
                }
            });
            setClientes(clientes);
         });
        
    } catch (error) {
        console.log(`${error} -- ${error.code}`);
    } finally {
        setEstaCarregando(false);
    }
    
}