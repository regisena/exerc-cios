// Capturar evento de submit do formulário

const form = document.querySelector("#formulario");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso').value;
    const inputAltura = e.target.querySelector('#altura').value;

    const peso = Number(inputPeso);
    const altura = Number(inputAltura);
    console.log('Cheguei até aqui...1');

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false);
    }

    const imc = getImc(peso, altura);
    const nivelIMC = getTabelaImc(imc);

    const mensagem = `Seu IMC é ${imc} ${nivelIMC}`;

    setResultado(mensagem, true);
});

function getTabelaImc(imc) {
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso',
                    'Obesidade grau 1','Obesidade grau 2',
                    'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    
    const imc = peso / Math.pow(altura, 2);

    return imc.toFixed(2);
}

function criaP(className){
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#resultado');
    //resultado.innerHTML = `<p>${mensagem}<\p>`;
    resultado.innerHTML = '';
      
    const p = criaP();
  
    isValid ? p.classList.add('paragrafo-resultado') : p.classList.add('bad');
  
    p.innerHTML = mensagem;
    resultado.appendChild(p);
};