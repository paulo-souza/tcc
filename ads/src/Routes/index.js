import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../Page/SignIn';
import Cliente from '../Page/Cliente';
import EsqueciMinhaSenha from '../Page/EsqueciMinhaSenha';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={SignIn} />
                <Route exact path={'/Cliente'} component={Cliente} />
                <Route exact path={'/EsqueciMinhaSenha'} component={EsqueciMinhaSenha} />
            </Switch>
        </BrowserRouter>
    );
}