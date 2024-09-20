// console.log("Teste")


const pokedex = ["psyduck","Bulbassauro","Charmander","Squirtle",]
// console.log(pokemon)
// console.log(pokemon[0])

//Loops / laços de repetição -> for, for in, for of, foreach


for(let i = 0; i < pokedex.length; i++){
  console.log(pokedex[i])
}
for (let pokemon in pokedex){
  console.log(pokemon)
}
for (let pokemon of pokedex){
  console.log(pokemon)
}