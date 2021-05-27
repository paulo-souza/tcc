import React, { useContext } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import BtnAdd from '../../Components/BtnAdd';
import { AuthContext } from '../../Context/AuthProvider';
import ModalUsuario from '../../Components/Modal/Usuario';



export default function Cliente() {
    const { container, abrirModalUsuario, estaCarregando } = useContext(AuthContext);

    return(
        <div style={container}>
            <Header />
            { estaCarregando && <Loading /> }

            <div className={'body'}>
                <h1>Aqui é o Body</h1>
                
            </div>
            
            { abrirModalUsuario && <ModalUsuario /> }

            <BtnAdd title={'Novo cliente'} action={()=> console.log('Aqui entra o formulário com tabs')} />
            <Footer />
        </div>
    );

}