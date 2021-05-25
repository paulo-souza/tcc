import React, { useContext } from 'react';
import Footer from '../../Components/Footer';
import { AuthContext } from '../../Context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';


export default function Cliente() {
    const { container } = useContext(AuthContext);


    return(
        <div style={container}>
            <nav>
                <div className={'container_title'}>
                    <h2 className={'titulo'}>Clientes</h2>
                </div>

                <div className={'container_buttons'}>
                    <button type={'button'} title={'Notificações'} className={'btnNav'}>
                        <FontAwesomeIcon icon={faBell} color={'#DAA520'} size={'lg'} />  
                    </button>

                    <button type={'button'} title={'Gerenciar conta de usuário'} className={'btnNav'}>
                        <FontAwesomeIcon icon={faUser} color={'#4682B4'} size={'lg'} />  
                    </button>
                </div>
            </nav>

            <div className={'body'}>
                <h1>Aqui é o Body</h1>
            </div>

            <Footer />
        </div>
    );

}