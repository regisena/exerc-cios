// Escreva uma função que recebe 2 números e retorne o maior deles
/*
function maior(numUm, numDois){
    return numUm > numDois ? numUm : numDois;
}*/

// arrow function, se houver somente uma linha náo há necessidade de chaves, bem como, da palavra reservada return
const maior = (numUm, numDois) => numUm > numDois ? numUm : numDois;


const um = 30;
const dois = 20;

console.log(maior(um, dois));