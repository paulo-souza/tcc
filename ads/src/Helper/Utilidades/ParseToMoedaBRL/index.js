
export default function ParseToMoedaBRL(numero) {
    let numeroFmtAmericano = ParseToMoedaUSA(numero);

    if(!numeroFmtAmericano) return null;

    numeroFmtAmericano = ParseToNumber(numeroFmtAmericano);

    if(!numeroFmtAmericano) return null;

    let numeroFormatado = numeroFmtAmericano.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return numeroFormatado;
}


export function ParseToNumber(numero) {
    if(!numero) return '';

    let numeroComCasasDecimais = Number(numero).toFixed(2);
    numeroComCasasDecimais = Number(numeroComCasasDecimais);

    return numeroComCasasDecimais;
}


export function ParseToMoedaUSA(numero) {
    if(!numero) return '';

    numero += '';

    return numero.replace(/[,]/, '.');
}