import { auth, database } from '../../../Service/Firebase';

export default async function SignIn(login) {

    if(!login.email) {
        console.log('auth/field-empty --> Campo e-mail é obrigatório');
        return false;
    };

    await auth.signInWithEmailAndPassword(login.email, login.senha)
    .then(async ({user}) => {

        await database.ref('usuario').child(user.uid).once('value')
        .then(async (snapshot) => {
            login.setUsuario({
                nome: snapshot.val().nome,
                email: snapshot.val().email,
                tipo: snapshot.val().tipo,
                uid: user.uid
            }); 
        })
        .catch(error=> console.log(error, error.code));
    })
    .catch(error=> console.log(error, error.code));
}