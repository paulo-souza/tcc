import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from '../Page/Clientes';
import EditarOuNovoCliente from '../Page/Clientes/EditarOuNovoCliente';
import PessoaJuridica from '../Page/Clientes/PessoaJuridica';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Clientes} />
                <Route exact path={'/Clientes/Novo'} component={EditarOuNovoCliente} />
                <Route exact path={'/Clientes/Novo/PessoaJuridica'} component={PessoaJuridica} />
                <Route exact path={'/Clientes/Editar/:uid'} component={EditarOuNovoCliente} />
                <Route exact path={'/Clientes/Editar/:uid/PessoaJuridica'} component={PessoaJuridica} />
            </Switch>
        </BrowserRouter>

    );
}