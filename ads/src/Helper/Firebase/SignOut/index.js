import { auth } from '../../../Service/Firebase';

export default async function SignOut(setUsuario) {
    let desejaSair = window.confirm('Tem certeza que deseja sair do sistema?');

    if(!desejaSair) return false;

    await auth.signOut()
        .then(() => {
            console.log('Saindo do sistema ...');

            window.sessionStorage.setItem('usuario', '');
            setUsuario(null);
            
            console.log('Pronto.');
        })
        .catch(error => console.log(error, error.code));

}