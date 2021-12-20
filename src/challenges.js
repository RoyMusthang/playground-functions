// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = base * (height / 2);
  return triangulo;
}

// Desafio 3
function splitSentence(frase) {
  let separador = frase.split(' ');
  return separador;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let resultado = `${ultimo}, ${primeiro}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let resultado = vitoria + empate;

  return resultado;
}

// Desafio 6
function highestCount(array) {
  let numero = array[0];
  let contagem = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (numero < array[i]) {
      numero = array[i];
      contagem = 0;
    }
    if (numero === array[i]) {
      contagem += 1;
    }
  }
  return contagem;
// desafio com ajuda de Sumoyama
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = Math.abs(mouse - cat1);
  let disCat2 = Math.abs(mouse - cat2);
  // auxilio no desafio por Sumoyama
  if (disCat1 < disCat2) {
    return 'cat1';
  } if (disCat2 < disCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];

  for (let i = 0; i < array.length; i += 1) {
    string[i] = ('bug!');
    if (array[i] % 15 === 0) {
      string.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      string.push('fizz');
    } else if (array[i] % 5 === 0) {
      string.push('buzz');
    }
  }
  return string;
}

// Desafio 9
function encode(cripto) {
  let criptoFull = '';
  const lib = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (let i of cripto) {
    if (lib[i]) {
      criptoFull += lib[i];
    } else {
      criptoFull += i;
    }
  }
  return criptoFull;
}

function decode(decri) {
  let decodeFull = '';
  const lib = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  for (let i of decri) {
    if (lib[i]) {
      decodeFull += lib[i];
    } else {
      decodeFull += i;
    }
  }
  return decodeFull;
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
};
