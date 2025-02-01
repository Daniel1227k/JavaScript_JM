//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
export const countCharacter = (word = "") => {
  return `La cadena ${word} tiene ${word.length} caracteres`;
};

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola".
export const sliceChar = (word, n) => {
  return word.slice(0, n);
};

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].
export const stringToArray = (word, split) => {
  return word.split(split);
};

//4) Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
export const repeatString = (string, n) => {
  return (string + " ").repeat(n).trim();
};
