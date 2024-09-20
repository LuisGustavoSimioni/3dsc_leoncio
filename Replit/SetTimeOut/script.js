// SET INTERVAL EXECUTA A CADA X MILISEGUNDOS
let n = 0

//SET TIME OUT - EXECUTA APOS X MILISEGUNDOS 
//  setTimeout(function(){
//    console.log('Executou')
//}, 5000)


/**
const intervalo = setInterval(function() {
  console.clear()
  console.log(`Contador: ${n}`)
  n++
}, 1000)

setTimeout(function(){
  clearInterval (intervalo)
//redirecionar para outra pagina
  location.href = "https://classroom.google.com/w/NjU3MDc0NjAxMjgw/t/all"
}, 5000)
*/


/** a partir dos conceitos aprendidos, resolva:
* A) Crie uma função SetInterval que receba uma função e um tempo de 3s
* B) Dentro dela imprima um número randômico entre 1 e 10
* C) Após percorrido 8s interrompa com setTimeout
*/


const intervalo2 = setInterval(function() {
let num = Math.round(Math.random() * 10)
console.log(num)
}, 3000)

//CRIAR UM SET TIMEOUT PARA PARAR O INTERVALO
setTimeout(function(){
  clearInterval(intervalo2)
  location.href = "https://classroom.google.com/w/NjU3MDc0NjAxMjgw/t/all"
}, 8000)
