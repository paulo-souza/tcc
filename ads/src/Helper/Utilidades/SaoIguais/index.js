
// Não funciona se um objeto possuir outro dentro de si
export default function SaoIguais(objetoA, objetoB) {

    let aChaves = Object.keys(objetoA);
    let bChaves = Object.keys(objetoB);

    if (aChaves.length !== bChaves.length) return false;
  
    let saoDiferentes = aChaves.some(chave => objetoA[chave] !== objetoB[chave]);

    return !saoDiferentes;
}