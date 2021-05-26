import React, { useContext } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { AuthContext } from '../../Context/AuthProvider';
import ModalUsuario from '../../Components/Modal/Usuario';

export default function Cliente() {
    const { container, abrirModalUsuario } = useContext(AuthContext);


    return(
        <div style={container}>
            <Header />

            <div className={'body'}>
                <h1>Aqui é o Body</h1>

            </div>
            
            { abrirModalUsuario && <ModalUsuario /> }

            <Footer />
        </div>
    );

}