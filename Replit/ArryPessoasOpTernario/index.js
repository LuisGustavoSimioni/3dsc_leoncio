/* 
     A) CRIE UM ARRAY DE OBJETOS CHAMADO > PESSOAS 
     B) FAÇA UMA FUNÇÃO QUE RECEBA UM ARRAY
     C) ITERE SOBRE O ARRAY DE PESSOAS E VERIFIQUE SE O ITEM SEXO == 'F' OU 'M'
     D) SE FOR IGUAL A 'F', INSIRA A PESSOA CORRENTE EM UM ARRAY CHAMADO MENINAS, 
     SE FOR 'M' INSIRA A PESSOA EM UM ARRAY CHAMADO MENINOS
     E) FINALMENTE, IMPRIMA OS TRÊS ARRAYS

*/

const pessoas = [
     { nome: 'João', sexo: 'M' },
     { nome: 'Maria', sexo: 'F' },
     { nome: 'Pedro', sexo: 'M' },
     { nome: 'Ana', sexo: 'F' },
     { nome: 'Carlos', sexo: 'M' }
]
const meninas = []
const meninos = []

function filtroPessoas(arrPessoas) { 
     if (typeof arrPessoas == "object") { // HECA SE E UM ARRAY/OBJETO
          for (pessoa of arrPessoas) { // ITERA SOBRE CADA ITEM DE PESSOAS
               pessoa.sexo == "F" // CHECA A PROPRIEDADE "SEXO"
                    ? meninas.push(pessoa) // CASO "F" 
                    : meninos.push(pessoa); // CASO "M"
          }
     } else {
          console.log("arrPessoas"); // SENAO IMPRIME UM ERRO
     }
}
filtroPessoas(pessoas);


console.log(" ---meninas--- ");
console.log(meninas);
console.log(" ---meninos--- ");
console.log(meninos)