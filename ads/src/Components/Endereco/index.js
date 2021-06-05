import React from 'react';

export default function Endereco(props) {
    return(
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
    );
}