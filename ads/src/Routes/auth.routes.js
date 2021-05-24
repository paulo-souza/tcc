import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../Page/SignIn';
import EsqueciMinhaSenha from '../Page/EsqueciMinhaSenha';

export default function AuthRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={SignIn} />
                <Route exact path={'/EsqueciMinhaSenha'} component={EsqueciMinhaSenha} />
            </Switch>
        </BrowserRouter>
    );
}