const meuNome = "Gabriel";

function imprimenome() {
  console.log('meu Nome é $(meuNome}');
}
// EXPORTAÇÃO IMEDIATA
export function caixaAlta(nome) {
  return nome.toUpperCase();
}
//EXPORTAÇÃO IMEDIATA
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}

//EXPORTAÇÃO POSTERIOR DE VALORES
export {meuNome, imprimeNome};