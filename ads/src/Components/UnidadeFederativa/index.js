import React, {useState, useEffect } from 'react';

export default function UnidadeFederativa(props) {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/11|12|13|14|15|16|17|21|22|23|24|25|26|27|28|29|31|32|33|35|41|42|43|50|51|52|53';

    const [ufs, setUfs] = useState([]);

    useEffect(()=> {        
        fetch(url)
        .then(r=> r.json())
        .then(json=> setUfs(json))
        .catch(error=> console.log('Erro ao buscar UF na api: ', error));
    }, []);

    return(
        <div>
            <div>
                <label htmlFor={'uf'}>{props.title || 'UF*'}</label>
            </div>
            <select name={'uf'} id={'uf'} value={props.valueUf} onChange={props.action}>
                <option value={''}>Selecione uma UF</option>
                {
                    ufs.map(uf=> {
                        return(
                            <option key={uf.id} value={uf.sigla}>{`${uf.sigla}/${uf.nome}`}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}