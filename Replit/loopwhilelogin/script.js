// 1) CRIE UM LOOP QUE RODE ENQUANTO O USUARIO NÃO DIGITAR UM NÚMERO
// VERIFIQUE SE O USUARIO E SENHA ESTÃO CORRETOS SE ESTIVER ERRADO
// INFORME O ERRO SENÃO DE BOAS VINDAS AO USUARIO 

const usuario = "Bill"
const senha = "flor preta"
let estaLogado = false
let u, s =""

while (!estaLogado){
  u = prompt{"Digite o usuário"}
  s = prompt{"Digite a senha"}
  if (u == usuario && s == senha)
    estaLogado = true
    alert ("óla seja bem vindo " + usuario)
}   else{
    alert ("Usuário ou senha incorretos")
  }
}