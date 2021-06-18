import React from 'react';
import BtnFoto from '../BtnFoto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

export default function AnexosCliente() {
    return (
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
                        <span style={{ marginTop: 10 }}>Contrato*</span>
                    </div>

                </div>

            </article>
        </section>
    );
}