function relogio() {
    function criaHoraDosSegundos(seconds){
        const time = new Date(seconds * 1000);
        
        return time.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    //console.log(getTimeFromDate(0));
    
    const relogio = document.querySelector('.relogio');
    
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e){
        const el = e.target;
    
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado'); // adiciona no css
        }
    
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado'); // remove do css
            clearInterval(timer);
            iniciaRelogio();
        }
    });
}
relogio();
