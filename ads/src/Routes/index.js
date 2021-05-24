import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
    const { estaLogado } = useContext(AuthContext);

    return(estaLogado ? <AppRoutes /> : <AuthRoutes />);
}