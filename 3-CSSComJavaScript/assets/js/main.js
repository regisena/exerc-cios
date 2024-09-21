const paragrafos = document.querySelector('.paragrafos');
const paragrafo = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of paragrafo){
    console.log(p);
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#fff';
}
