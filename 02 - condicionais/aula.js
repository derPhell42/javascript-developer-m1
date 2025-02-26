/*
const numero = 5;
const ehNumeroPar = (numero % 2) === 0;

if (ehNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}
*/


/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 1580;
const tipoCombustivel = `Gasolina`;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === `Etanol`) {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


    
