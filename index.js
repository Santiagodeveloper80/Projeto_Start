var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('clik', function() {
        duvida.classList.toggle('ativa')
    });
});

