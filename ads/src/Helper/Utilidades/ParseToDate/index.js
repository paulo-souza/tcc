export default function ParseToDate(data) {
    let ehFormatoAmericado = /^\d{4}-\d{1,2}-\d{1,2}$/.test(data);
    
    console.log('dataObtida=> ', data);
    if(!ehFormatoAmericado) throw 'Formato de data inválido!. O Formado deve ser yyyy-MM-dd';

    let novaData = new Date(`${data} 00:01:00`);
    return novaData;
}