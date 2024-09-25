/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * 
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÂO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100 
 */
const divisivelPor3 = (num) => num % 3 === 0 ? 'Fizz' : false;

const divisivelPor5 = (num) => num % 5 === 0 ? 'Buzz' : false;

const divisivelPor3E5 = (num) => ((num % 3 === 0) && (num % 5 === 0)) ? 'FizBuzz' : num;

const ehNumero = (num) => (isNaN(num)) ? num : false; // o retono é false caso não seja um número, por isso a negação


for(let i = 0; i <= 100; i++){
    // se divisível por 3
    console.log(i, divisivelPor3(i));
    // se divisível por 5
    console.log(i, divisivelPor5(i));
    // se divisível por 3 e 5
    console.log(i, divisivelPor3E5(i));
    // se realmente é um número
    console.log(i, ehNumero(i));
    console.log(`Dentro do laço... ${i}`);
}
console.log('a', ehNumero('a'));