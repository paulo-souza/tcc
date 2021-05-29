import React from 'react';
import BtnFoto from '../../../Components/BtnFoto';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../Css/Tabs.css';
import '../../../Css/Cliente.css';


export default function Novo(props) {

    return (
        <div>
            <div className={'breadcumb'}>
                <Link to={'/'} className={'niveis'}>Clientes</Link>
                <span className={'niveis separadorNiveis'}>{'>'}</span>
                <span className={'niveis'}>Novo</span>
            </div>

            <h2 className={'tituloTabs'}>Novo Cliente</h2>

            
            <div className={'tabordion'}>
                <section id={'section1'}>
                    <input type={'radio'} name={'sections'} id={'option1'} defaultChecked />
                    <label className={'labelTabs'} htmlFor={'option1'}>Pessoais</label>

                    <article>
                        <div className={'containerTituloAvalistas'}>
                            <h3>Pessoa Jurídica*</h3>
                            <button className={'btnNovoCliente'} title={'Novo cliente'} type={'button'}>Novo</button>
                        </div>

                        <hr />

                        <div className={'containerAvalistas'}>
                            <a href={'#'}>Soluções Express</a> 
                        </div>

                        <hr />
                        
                        <hr id={'linhaSeparadoraCliente'} />
                        
                        <div className={'containerTituloAvalistas'}>
                            <h3>Sócio(s)*</h3>
                            <button className={'btnNovoCliente'} title={'Novo sócio'} type={'button'}>Novo</button>
                        </div>

                        <hr />

                        <div className={'containerAvalistas'}>
                            <a href={'#'}>Vitor Emanuel da Mata</a> 
                            <a href={'#'}>Mateus Marcos Vínicius Cavalcante</a> 
                        </div>

                        <hr />    
                       

                    </article>
                </section>

                <section id={'section2'}>
                    <input type={'radio'} name={'sections'} id={'option2'} />
                    <label className={'labelTabs'} htmlFor={'option2'}>Endereço</label>

                    <article >
                        <div >
                            <div style={{marginTop: 0, marginBottom: 25, width: 150, height: 25, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <input style={{width: 'auto', padding: 0, margin:0}} type={'checkbox'} id={'imovelProprio'} name={'imovelProprio'} value={false} checked={false} />
                                <label style={{marginLeft: 8}} htmlFor={'imovelProprio'}>Imóvel próprio?</label>
                            </div>

                            <label htmlFor={'cep'}>CEP*</label>
                            <input id={'cep'} name={'cep'} value={''} type={'text'} placeholder={'CEP'} v-model={'cep'} maxlength={'8'} />
                            
                            <div>
                                <label htmlFor={'uf'}>UF*</label>
                            </div>
                            <select name={'uf'} id={'uf'}>
                                <option value={'ap'} selected={true}>Ap</option>
                                <option value={'am'} selected={false}>AM</option>
                                <option value={'ba'} selected={false}>BA</option>
                                <option value={'df'} selected={false}>DF</option>
                                <option value={'go'} selected={false}>GO</option>
                            </select>

                            <label htmlFor={'cidade'}>Cidade*</label>
                            <input id={'cidade'} name={'cidade'} value={''} type={'text'} placeholder={'Cidade'}  />

                            <label htmlFor={'logradouro'}>Logradouro*</label>
                            <input id={'logradouro'} name={'logradouro'} 
                                value={''} type={'text'} placeholder={'Rua, Avenida, Viela, Rodovia, ...'}  />

                            <label htmlFor={'complemento'}>Complemento</label>
                            <input id={'complemento'} name={'complemento'} value={''} type={'text'} placeholder={'Quadra, Lote'}  />

                            <label htmlFor={'bairro'}>Bairro*</label>
                            <input id={'bairro'} name={'bairro'} value={''} type={'text'} placeholder={'Bairro'}  />

                            <label htmlFor={'numero'}>Número</label>
                            <input id={'numero'} name={'numero'} value={''} type={'text'} placeholder={'Número'}  />
                        </div>
                    </article>
                </section>

                <section id={'section3'}>
                    <input type={'radio'} name={'sections'} id={'option3'} />
                    <label className={'labelTabs'} htmlFor={'option3'}>Contato</label>

                    <article>

                        <label htmlFor={'email1'}>E-mail1*</label>
                        <input id={'email1'} name={'email1'} value={''} type={'email'} placeholder={'E-mail obrigatório'}  />
                       
                        <label htmlFor={'email2'}>E-mail2</label>
                        <input id={'email2'} name={'email2'} value={''} type={'email'} placeholder={'E-mail opcional'}  />

                        <label htmlFor={'telefone1'}>Telefone1*</label>
                        <input id={'telefone1'} name={'telefone1'} value={''} type={'tel'} placeholder={'Número de telefone obrigatório'}  />
                        
                        <label htmlFor={'telefone2'}>Telefone2</label>
                        <input id={'telefone2'} name={'telefone2'} value={''} type={'tel'} placeholder={'Número de telefone opcional'}  />
                        
                        <label htmlFor={'celular1'}>Celular1*</label>
                        <input id={'celular1'} name={'celular1'} value={''} type={'tel'} placeholder={'Número de celular obrigatório'}  />
                        
                        <label htmlFor={'celular2'}>Celular2</label>
                        <input id={'celular2'} name={'celular2'} value={''} type={'tel'} placeholder={'Número de celular opcional'}  />
                        

                    </article>
                 </section>

                <section id={'section4'}>
                    <input type={'radio'} name={'sections'} id={'option4'} />
                    <label className={'labelTabs'} htmlFor={'option4'}>Anexos</label>

                    <article>
                        <div id={'containerAnexos'}>
                            
                            <div className={'containerClienteAnexos'}>
                                <BtnFoto abrirPreVisualizacao={true} />
                                <span>Foto*</span>
                            </div>
                            
                            <div className={'containerClienteAnexos'}>
                                <div className={'areaUpload'}>
                                    <div>
                                        <FontAwesomeIcon icon={faCloudUploadAlt} color={'#000'} size={'5x'} />
                                    </div>
                                    
                                    <div id={'divUploadPdf'}>
                                        <label id={'labelUploadPdf'} htmlFor={'fileUpload'} title={'Upload do contrato em formato .pdf'}>PDF</label>
                                        <input type={'file'} id={'fileUpload'} value={''} name={'arquivoContrato'} accept={'application/pdf'} />
                                    </div>
                                </div>
                                <span style={{marginTop: 10}}>Contrato*</span>
                            </div>

                        </div>
     
                    </article>
                </section>

                <section id={'section5'}>
                    <input type={'radio'} name={'sections'} id={'option5'} />
                    <label className={'labelTabs'} htmlFor={'option5'}>Avalistas</label>
                    
                    <article>
                        <div className={'containerTituloAvalistas'}>
                            <h3>Avalistas*</h3>
                            <button className={'btnNovoCliente'} title={'Novo avalista'} type={'button'}>Novo</button>
                        </div>

                        <hr />

                        <div className={'containerAvalistas'}>
                            <a href={'#'}>Fulano de Tal</a>
                            <a href={'#'}>Beltrano de Tal</a>
                            <a href={'#'}>Cicrano de Tal</a>
                        </div>

                        <hr />
                    </article>
                </section>

                <section id={'section6'}>
                    <input type={'radio'} name={'sections'} id={'option6'} />
                    <label className={'labelTabs'} htmlFor={'option6'}>Crédito</label>
                    
                    <article>
                        <div>
                            <label htmlFor={'opCredito'}>Operação de crédito*</label>
                        </div>

                        <select name={'opCredito'} id={'opCredito'}>
                            <option value={'emprestimo'} selected={true}>Empréstimo</option>
                            <option value={'financiamento'} selected={false}>Financiamento</option>
                            <option value={'desconto'} selected={false}>Desconto de título</option>
                        </select>

                        <div>
                            <label htmlFor={'tipoJuros'}>Tipo de Juros*</label>
                        </div>

                        <select name={'tipoJuros'} id={'tipoJuros'}>
                            <option value={'simples'} selected={true}>Simples</option>
                            <option value={'composto'} selected={false}>Composto</option>
                        </select>

                        <label htmlFor={'valorEmprestimo'}>Valor empréstimo <strong>R$*</strong></label>
                        <input id={'valorEmprestimo'} name={'valorEmprestimo'} value={''} type={'text'} placeholder={'ex.: R$ 10.000,00'} />
                        
                        <label htmlFor={'taxaJuros'}>Taxa de juros <strong>%*</strong></label>
                        <input id={'taxaJuros'} name={'taxaJuros'} value={''} type={'text'} placeholder={'ex.: 10%'} />
                        
                        <div>
                            <label htmlFor={'prazo'}>Prazo*</label>
                        </div>

                        <select name={'prazo'} id={'prazo'}>
                            <option value={'anual'} selected={true}>Anual</option>
                            <option value={'mensal'} selected={false}>Mensal</option>
                            <option value={'trimestral'} selected={false}>Trimestral</option>
                            <option value={'semestral'} selected={false}>Semestral</option>
                        </select>

                        <label htmlFor={'qtdPrazo'}>QTD Prazo*</label>
                        <input id={'qtdPrazo'} name={'qtdPrazo'} value={''} type={'number'} placeholder={'ex.: 3 meses'} />

                        <label htmlFor={'montante'}>Montante <strong>R$*</strong></label>
                        <input id={'montante'} name={'montante'} value={''} type={'text'} placeholder={'ex.: R$ 10.550,00'} />
                    </article>
                </section>

                <section id={'section7'}>
                    <input type={'radio'} name={'sections'} id={'option7'} />
                    <label className={'labelTabs'} htmlFor={'option7'}>Detalhes</label>
                    
                    <article>

                        <div>
                            <label htmlFor={'pagamento'}>Pagamento</label>
                            <select name={'pagamento'} id={'pagamento'}>
                                <option value={'ok'} selected={true}>Em dia</option>
                                <option value={'pendente'} selected={false}>Pendente</option>
                                <option value={'inadimplente'} selected={false}>Inadimplente</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor={'tipoJuros'}>Tipo de Juros*</label>
                        </div>

                        <select name={'tipoJuros'} id={'tipoJuros'}>
                            <option value={'simples'} selected={true}>Simples</option>
                            <option value={'composto'} selected={false}>Composto</option>
                        </select>

                        <label htmlFor={'valorEmprestimo'}>Valor empréstimo <strong>R$*</strong></label>
                        <input id={'valorEmprestimo'} name={'valorEmprestimo'} value={''} 
                            type={'text'} disabled />

                        <label htmlFor={'taxaJuros'}>Taxa de juros <strong>%*</strong></label>
                        <input id={'taxaJuros'} name={'taxaJuros'} value={''} type={'text'} disabled />

                        <label htmlFor={'prazoDetalhe'}>Prazo</label>                        
                        <input id={'prazoDetalhe'} name={'prazoDetalhe'} value={''} type={'text'}  placeholder={'1 semestre(s)'} disabled />

                        //TODO Tabela de histórico da situação
                    </article>
                </section>
            </div>
           
           
            <button type={'button'} title={'Salvar novo cliente'} className={'btnAdd btnSalvarCliente'}>
                <FontAwesomeIcon icon={faSave} color={'#fff'} size={'lg'} />                
            </button>
           
        </div>
    );
}