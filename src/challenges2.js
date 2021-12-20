const invalidValue = 'não é possível gerar um número de telefone com esses valores';
const invalidSize = 'Array com tamanho incorreto.';
// Desafio 10
function techList(array, player) {
  let novaLista = array.sort();
  let tech = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < novaLista.length; i += 1) {
    tech.push({ tech: novaLista[i], name: player });
  }
  return tech;
}

// Desafio 11

function checkedLength(number) {
  if (number.length !== 11) {
    return true;
  }
  return false;
}

function checkNumberValid(number) {
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] < 0 || number[i] > 9) {
      return true;
    }
  }
  return false;
}

function countRepeated(number, arr) {
  let count = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === arr) {
      count += 1;
    }
  }
  return count;
}

function checkCount(number) {
  for (let i = 0; i < number.length; i += 1) {
    let repeat = countRepeated(number, number[i]);
    if (repeat >= 3) return true;
  }
}

function mountNumber(number) {
  const numberString = number.join('');
  let ddd = numberString.slice(0, 2);
  let prefix = numberString.slice(2, 7);
  let suffix = numberString.slice(7, 11);
  return `(${ddd}) ${prefix}-${suffix}`;
}

function generatePhoneNumber(numbers) {
  if (checkedLength(numbers)) {
    return invalidSize;
  }
  if (checkNumberValid(numbers)) {
    return invalidValue;
  }
  if (checkCount(numbers)) {
    return invalidValue;
  }
  return mountNumber(numbers);
}
// Desafio 12
function triangleCheck(a, b, c) {
  if (
    a > Math.abs(b - c)
    && b > Math.abs(a - c)
    && c > Math.abs(a - b)
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(valor) {
  let listaNumero = valor.match(/[0-9]/g);
  let soma = 0;
  for (let numero of listaNumero) {
    soma += Number(numero);
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
