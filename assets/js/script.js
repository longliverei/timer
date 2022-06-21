function myTimer() {
    const relogio = document.querySelector('.relogio');

    let seg = 0;
    let min = 0;
    let hora = 0;
    let interval;

    function addSeg() {    
        seg = seg + 1;

        if (seg > 59) {
            seg = 0;
            min = min + 1;
        } 

        if (min > 59) {
            min = 0;
            hora = hora + 1;
        }
    };

    function initCounter() {
        addSeg();
        if (seg < 10 && min < 10) relogio.innerHTML = hora + ':' + '0' + min + ':' + '0' + seg
        if (min >= 10 && seg < 10) relogio.innerHTML = hora + ':' + min + ':' + '0' + seg
        if (min < 10 && seg >= 10) relogio.innerHTML = hora + ':' + '0' + min + ':' + seg
        if (min >= 10 && seg >= 10) relogio.innerHTML = hora + ':' + min + ':' + seg
    };

    function myInterval() {
        interval = setInterval(initCounter, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove("red-font");
            clearInterval(interval)
            myInterval(); 
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add("red-font");
            clearInterval(interval);
        }

        if (el.classList.contains('zerar')) {
            relogio.classList.remove("red-font");
            relogio.innerHTML = '0:00:00';
            seg = 0;
            min = 0;
            hora = 0;
            clearInterval(interval);
        }
    })
}

myTimer();
