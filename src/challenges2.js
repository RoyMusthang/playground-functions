// Desafio 10
function techList(array, player) {
let novaLista = array.sort();
let tech = [];
  if (array.length === 0){
    return 'Vazio!';
  }
  for (let i in novaLista){
    tech.push({tech: novaLista[i], name: player })
  }
  return tech
  // desafio concluido com auxilio do Rogerio P. da Silva https://github.com/rogeriop1990cv
}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};