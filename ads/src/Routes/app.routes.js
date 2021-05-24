import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cliente from '../Page/Cliente';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Cliente} />
            </Switch>
        </BrowserRouter>

    );
}