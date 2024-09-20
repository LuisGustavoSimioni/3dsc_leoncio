//While é um loop sem pauas
//let n = 0;
//while (n < 5) {
//  console.log(n);console.log(n)
//  n= n + 1;
//}
//SetInterval é um loop com pausas
let fps = 0;

setInterval(function() {
 // fps = Math.ramdom(30,60) * 60).toFixed(1)
  fps= Math.round(Math.random(30,60) * 60);
  console.clear();
  console.log('FPS: ${fps}');
},1000); // 1 segundos em milisegundos

setInterval(function(){
  const relogio = new Date().toLocaleTimesStrings()
  console.clear()
  console.log(relogio)
},1000);
           
           
           )