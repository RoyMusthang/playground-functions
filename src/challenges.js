// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = base * height / 2
  return triangulo
}

// Desafio 3
function splitSentence(frase) {
  let separador = frase.split(" ")
  return separador
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array [array.length -1];
  let resultado = ultimo + ", "+ primeiro;
  return resultado
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let resultado = vitoria + empate;
  
  return resultado
}

// Desafio 6
function highestCount(array) {
  let numero = array[0];
  let contagem = 0;
  for (let i in array){
    if (numero < array[i]){
      numero = array[i];
    }
  }
  for (let index in array){
    if (numero == array[index]){
      contagem += 1;
    }
  }
  return contagem
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  let disCat1 = Math.abs(mouse - cat1);
  let disCat2 = Math.abs(mouse - cat2);

  if (disCat1 < disCat2){
    return "cat1"
  }else if (disCat2 < disCat1){
    return "cat2"
  }else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
let resultado = [];
for (let index in array) {
  if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
    resultado.push('fizzBuzz');      
  } else if (array[index] % 5 == 0) {
    resultado.push('buzz');
  } else if (array[index] % 3 == 0) {
    resultado.push('fizz');
  } else {
    resultado.push('bug!');
  }
}
return (resultado);
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
}