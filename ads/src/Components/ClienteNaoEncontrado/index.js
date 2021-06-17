import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply} from '@fortawesome/free-solid-svg-icons';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    link: {
        borderStyle: 'none',
        borderWidth: 0,
        borderColor: 'none',
        backgroundColor: 'transparent',
        color: '#007fff'
    }
}

export default function ClienteNaoEncontrado(props) {
    return(
        <div style={styles.container}>
            <span>
                Cliente(s) não encontrado!               
            </span>

            
            <button style={styles.link} type={'button'} title={'Listar todos os clientes'} onClick={props.action}>
                <FontAwesomeIcon icon={faReply} color={'#000'} size={'lg'} /> 
                Voltar
            </button>
    
        </div>
    );
}