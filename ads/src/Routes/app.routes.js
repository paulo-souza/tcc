import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from '../Page/Clientes';
import EditarOuNovoCliente from '../Page/Clientes/EditarOuNovoCliente';
import PessoaJuridica from '../Components/Form/PessoaJuridica';
import Socio from '../Page/Clientes/Socio';
import Avalistas from '../Page/Avalistas';
import ContatoCliente from '../Components/Form/ContatoCliente';
import EnderecoCliente from '../Components/Form/EnderecoCliente';
import Credito from '../Components/Form/Credito';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                    <Route exact path={'/'} component={Clientes} />
                    <Route exact path={'/Clientes/Novo/Avalistas'} component={Avalistas} />
                    <Route exact path={'/Clientes/Novo'} component={EditarOuNovoCliente} />
                    <Route exact path={'/Clientes/Novo/PessoaJuridica'} component={PessoaJuridica} />
                    <Route exact path={'/Clientes/Novo/Socio'} component={Socio} />
                    <Route exact path={'/Clientes/Novo/Contato'} component={ContatoCliente} />
                    <Route exact path={'/Clientes/Novo/Endereco'} component={EnderecoCliente} />
                    <Route exact path={'/Clientes/Novo/Credito'} component={Credito} />
                    
                
                    <Route exact path={'/Clientes/Editar/:uidCliente'} component={EditarOuNovoCliente} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/PessoaJuridica'} component={PessoaJuridica} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Socio/:uidSocio'} component={Socio} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Socio'} component={Socio} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Avalista/:uidAvalista'} component={Avalistas} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Contato'} component={ContatoCliente} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Endereco'} component={EnderecoCliente} />
                    <Route exact path={'/Clientes/Editar/:uidCliente/Credito'} component={Credito} />
               
            </Switch>
        </BrowserRouter>

    );
}