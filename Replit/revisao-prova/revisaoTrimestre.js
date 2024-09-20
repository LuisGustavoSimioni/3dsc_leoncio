// SET TIMEOUT / SET INTERVAL
/**
 * função nativa que recebe argumentos
 * controla dados a partir de um intervalo
 */
const intervalo1 = setInterval(function() {
    console.log("Olá")
}, 200);
// LIMPAR INTERVALO
clearInterval(intervalo1);
const timeOut1 = setTimeout(function() {
    console.log("Olá")
}, 200);
// LIMPAR INTERVALO
clearTimeouit(timeOut1);
