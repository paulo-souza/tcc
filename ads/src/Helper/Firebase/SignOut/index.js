import { auth } from '../../../Service/Firebase';

export default async function SignOut(setUsuario, setEstaCarregando) {
    let desejaSair = window.confirm('Tem certeza que deseja sair do sistema?');

    if(!desejaSair) return false;

    setEstaCarregando(true);

    await auth.signOut()
        .then(() => {
            window.sessionStorage.setItem('usuario', '');
            setUsuario(null);            
        })
        .catch(error => console.log(error, error.code))
        .finally(()=> setEstaCarregando(false));

}