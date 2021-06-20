import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { enderecoDefault } from '../../Helper/ObjetoDefault';


const styles = {
    row: {
        marginBottom: 15
    },
    PossuiImovelProprio: {
        backgroundColor: '#7FFFD4',
        width: 50,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    NaoPossuiImovelProprio: {
        backgroundColor: '#FFB6C1',
        width: 50,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        color: '#000',
        fontWeight: 'bold'
    }
};

export default function EnderecoCliente() {
   const { uidCliente } = useParams();
   const [enderecoCliente, setEnderecoCliente] = useState(enderecoDefault);

   const classBtnNovoEndereco = !uidCliente && enderecoCliente?.uid ? 'btnEditar' : 'btnNovoCliente';
   const titleBtnNovoEndereco = !uidCliente && enderecoCliente?.uid ? 'Editar' : 'Novo';

   const btnEndereco = (
        uidCliente  ?  <Link className={'btnEditar'} to={`/Clientes/Editar/${uidCliente}/Endereco`} title={'Editar endereço'}>Editar</Link>
        :
        <Link className={classBtnNovoEndereco} to={'/Clientes/Novo/Endereco'} title={`${titleBtnNovoEndereco} endereco`}>{titleBtnNovoEndereco}</Link>
    );

    useEffect(()=> {
        let enderecoCache = window.sessionStorage.getItem('endereco_cliente');
        let enderecoCacheJSON = enderecoCache ? JSON.parse(enderecoCache) : enderecoDefault;

        setEnderecoCliente(enderecoCacheJSON);
    }, []);

    const formateCEP = useCallback(cep=> {       
        let regex = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/;
        return cep.replace(regex, "$1.$2-$3");         

    }, [enderecoCliente]);

    return(
        <section id={'section2'}>
            <input type={'radio'} name={'sections'} id={'option2'} />
            <label className={'labelTabs'} htmlFor={'option2'}>Endereço</label>

            <article >
                <div className={'containerClienteSubTitulo'}>
                    <h3>Endereço do Cliente*</h3>
                    {btnEndereco}
                </div>
                <hr />

                {
                    enderecoCliente.uid &&
                    <div className={'containerVisualizarCampos'}>
                        <span style={styles.row}>
                            <strong>Possui imóvel próprio ?</strong> 
                            <span style={enderecoCliente.imovel_proprio ? styles.PossuiImovelProprio : styles.NaoPossuiImovelProprio}>
                                {`${enderecoCliente.imovel_proprio ? 'Sim' : 'Não'}`} 
                            </span>
                        </span>
                        <span style={styles.row}><strong>Logradouro:</strong> {enderecoCliente.logradouro}</span>
                        <span style={styles.row}><strong>Complemento:</strong> {enderecoCliente.complemento}</span>
                        <span style={styles.row}><strong>Bairro:</strong> {enderecoCliente.bairro}</span>
                        <span style={styles.row}><strong>Número:</strong> {`${enderecoCliente.numero || 'SN'}`}</span>
                        <span style={styles.row}><strong>Cidade:</strong> {enderecoCliente.cidade}-{enderecoCliente.uf}</span>
                        <span style={styles.row}><strong>CEP:</strong> {formateCEP(enderecoCliente.cep)}</span>
                    </div>
                }
                
                {enderecoCliente.uid && <hr /> }
            </article>
        </section>
    );
}