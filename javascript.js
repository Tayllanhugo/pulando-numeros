function contar() {
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');
    var resultado = window.document.getElementById('res');

    var ini = Number(inicio.value);
    var fi = Number(fim.value);
    var pass = Number(passo.value);

    resultado.innerHTML = ' '
    
    for (ini; ini <= fi; ini += pass) {
        resultado.innerHTML += ini + '👉'
    }

}


