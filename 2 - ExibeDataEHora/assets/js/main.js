

function selecionaDiaSemana(diaSemana){
    switch (diaSemana) {
        case 0:
           return 'domingo';
        break;
        case 1:
            return 'segunda-feira';
        break;
        case 2:
            return 'terça-feira';
        break;
        case 3:
            return 'quarta-feira';
        break;
        case 4:
            return 'quinta-feira';
        break;
        case 5:
            return 'sexta-feira';
        break;
        case 6:
            return 'sábado';
        break;
        default:
            return '';
        break;
    }
}
        
function formataData(data){
   
    const dia   = data.getDate();
    const mes   = defineMesPorExtenso(data);
    const ano   = data.getFullYear();
    const hora  = data.getHours();
    const min   = data.getMinutes();

    return `${dia} de ${mes} de ${ano} ${hora}:${min}`;
    
}

function defineMesPorExtenso(data){
     const mesSelecionado = data.getMonth();

     switch(mesSelecionado){
        case 0:
            return 'janeiro';
        break;
        case 1:
            return 'fevereiro';
        break;
        case 2:
            return 'março';
        break;
        case 3:
            return 'abril';
        break;
        case 4:
            return 'maio';
        break;
        case 5:
            return 'junho';
        break;
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        break;
        case 8:
            return 'setembro';
        break;
        case 9:
            return 'outubro';
        break;
        case 10:
            return 'novembro';
        break;
        case 11:
            return 'dezembro';
        break;
        default:
            return '';
        break;
     }

}

const data = new Date();

const diaSemana = data.getDay();
        
const diaSelecionado = selecionaDiaSemana(diaSemana);

const resultado = document.querySelector('#data');


resultado.innerHTML = `${diaSelecionado}, ${formataData(data)}`;
