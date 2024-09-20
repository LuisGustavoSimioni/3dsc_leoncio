//declarar funções
function imprimeOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("Olá, " + nome);
}

let salario = 1000;

// SET INTERVAL
// setInterval(function () {
//   salario = salario + 100;
//   console.clear();
//   console.log(`Salário:  R$${salario},00`);
// }, 2000);

// crie uma função que retorne um objeto js e execute a msm a cada 1 segundo
// através de um setInterval()

let oreiaSeca = {
  nome: "Oreia",
  sobrenome: "Seca",
  obrasFeitasNoDia: 500,
};

const intervalo = setInterval(function () {
  oreiaSeca.obrasFeitasNoDia = oreiaSeca.obrasFeitasNoDia + 1;
  console.clear();
  console.log(oreiaSeca);
}, 500);

setTimeout(function () {
  clearInterval(intervalo);
  console.log("fim");
}, 3000)

// //invocar funções
// imprimeOla();
// olaPessoa("Ana");
// olaPessoa("Pedro");
