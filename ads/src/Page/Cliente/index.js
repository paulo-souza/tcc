import React, { useContext } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import BtnAdd from '../../Components/BtnAdd';
import { AuthContext } from '../../Context/AuthProvider';
import ModalUsuario from '../../Components/Modal/Usuario';
import TabelaCliente from '../../Components/TabelaCliente';

export default function Cliente() {
    const { container, abrirModalUsuario, estaCarregando } = useContext(AuthContext);

    return (
        <div style={container}>
            <Header title={'Clientes'} />
            { estaCarregando && <Loading />}

            <div className={'body'}>
                <h1>Aqui é o Body</h1>

                <TabelaCliente />
            </div>

            { abrirModalUsuario && <ModalUsuario />}

            <BtnAdd title={'Novo cliente'} path={'/Clientes/Novo'} />
            <Footer />
        </div>
    );

}