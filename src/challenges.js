/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Submetido por Júlia Farias

// Desafio 1
function compareTrue(boolen1, boolen2) {
  if (boolen1 && boolen2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaT = (base * height) / 2;
  return areaT;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimoIdx = array.length - 1;
  return array[ultimoIdx].concat(', ').concat(array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let repete = 0;
  for (const num of array) {
    if (maior < num) {
      maior = num;
      repete = 1;
    } else if (maior === num) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let resposta;
  if (distCat1 < distCat2) {
    resposta = 'cat1';
  } else if (distCat1 > distCat2) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(array) {
  let arraySaida = [];
  for (const number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      arraySaida.push('fizzBuzz');
    } else if (number % 3 === 0 && number % 5 !== 0) {
      arraySaida.push('fizz');
    } else if (number % 3 !== 0 && number % 5 === 0) {
      arraySaida.push('buzz');
    } else {
      arraySaida.push('bug!');
    }
  }
  return arraySaida;
}

// Desafio 9
function encode(entrada) {
  let saida = '';
  for (const letra of entrada) {
    switch (letra) {
      case 'a':
        saida += '1';
        break;
      case 'e':
        saida += '2';
        break;
      case 'i':
        saida += '3';
        break;
      case 'o':
        saida += '4';
        break;
      case 'u':
        saida += '5';
        break;
      default:
        saida += letra;
    }
  }
  return saida;
}
function decode(entrada) {
  let saida = '';
  for (const letra of entrada) {
    switch (letra) {
      case '1':
        saida += 'a';
        break;
      case '2':
        saida += 'e';
        break;
      case '3':
        saida += 'i';
        break;
      case '4':
        saida += 'o';
        break;
      case '5':
        saida += 'u';
        break;
      default:
        saida += letra;
    }
  }
  return saida;
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
 