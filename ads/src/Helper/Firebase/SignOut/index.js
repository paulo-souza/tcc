import { auth } from '../../../Service/Firebase';

export default async function SignOut(setUsuario) {
    await auth.signOut()
        .then(() => {
            console.log('Saindo do sistema ...');
            setUsuario(null);
            console.log('Pronto.')
        })
        .catch(error => console.log(error, error.code));

}