import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cliente from '../Page/Cliente';
import NovoCliente from '../Page/Cliente/Novo';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Cliente} />
                <Route exact path={'/Clientes/Novo'} component={NovoCliente} />
            </Switch>
        </BrowserRouter>

    );
}