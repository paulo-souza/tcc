import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

export default function Cliente() {
    const { usuario } = useContext(AuthContext);

    console.log('====================================');
    console.log('Usuario logado:')
    console.log(usuario);
    console.log('====================================');

    return(
        <div>
            <h2>Clientes</h2>
        </div>
    );

}