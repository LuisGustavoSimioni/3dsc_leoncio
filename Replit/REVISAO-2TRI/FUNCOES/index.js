// DECLARAR FUNÇÕES
function imprimeOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("Olá, " + nome);
}

let salario = 1000;

//SET INTERVAL
setInterval(function () {
  salario = salario + 100;
  console.clear(); // Limpa o terminal
  console.log(`Salário: R$${salario},00`);
}, 2000);

// CRUE UMA FUNÇÃO QUE RETORNE UM ONJETO JS
// EXECUTE ESSA FUNÇÃO A CADA 1s ATRAVES DE UMA
// FUNÇÃO SET INTERVAL()
// EXECUTE ESSA FUNÇÃO A CADA 1s ATRAVES

// INVOCAR AS FUNÇÕES
// imprimeOla();
// olaPessoa("Mariah");
// olaPessoa("Jorge");
// olaPessoa("Maria");
