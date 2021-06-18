import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from '../Page/Clientes';
import EditarOuNovoCliente from '../Page/Clientes/EditarOuNovoCliente';
import PessoaJuridica from '../Components/Form/PessoaJuridica';
import Socio from '../Page/Clientes/Socio';
import Avalistas from '../Page/Avalistas';


export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                    <Route exact path={'/'} component={Clientes} />
                    <Route exact path={'/Clientes/Novo/Avalistas'} component={Avalistas} />
                    <Route exact path={'/Clientes/Novo'} component={EditarOuNovoCliente} />
                    <Route exact path={'/Clientes/Novo/PessoaJuridica'} component={PessoaJuridica} />
                    <Route exact path={'/Clientes/Novo/Socio'} component={Socio} />
                    
                
                    <Route exact path={'/Clientes/Editar/:uidCliente'} component={EditarOuNovoCliente} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/PessoaJuridica'} component={PessoaJuridica} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Socio/:uidSocio'} component={Socio} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Socio'} component={Socio} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Avalista/:uidAvalista'} component={Avalistas} />
               
            </Switch>
        </BrowserRouter>

    );
}