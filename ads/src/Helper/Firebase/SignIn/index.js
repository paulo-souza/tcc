import { auth, database } from '../../../Service/Firebase';

export default async function SignIn(login) {

    if(!login.email) {
        console.log('auth/field-empty --> Campo e-mail é obrigatório');
        return false;
    };

    login.setEstaCarregando(true);

    await auth.signInWithEmailAndPassword(login.email, login.senha)
    .then(async ({user}) => {

        await database.ref('usuario').child(user.uid).once('value')
        .then(async (snapshot) => {
            
            let usuarioAutentico = {
                nome: snapshot.val().nome,
                email: snapshot.val().email,
                tipo: snapshot.val().tipo,
                uid: user.uid
            }

            window.sessionStorage.setItem('usuario', JSON.stringify(usuarioAutentico));
            login.setUsuario(usuarioAutentico); 
        })
        .catch(error=> console.log(error, error.code));
    })
    .catch(error=> console.log(error, error.code))
    .finally(()=> login.setEstaCarregando(false));
}