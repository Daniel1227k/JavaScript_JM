import {
  countCharacter,
  sliceChar,
  stringToArray,
  repeatString,
} from "./exercises/exercises_part1.js";

import {
  invertirPalabra,
  palabrasRepetidas,
  palaindromo,
  eliminarPatron,
} from "./exercises/exercises_part2.js";
("./exercises/exercises_part2.js");

import {
  numAletorio,
  esCapicua,
  factorial,
} from "./exercises/exercises_part3.js";

import { ParImpar, esPrimo } from "./exercises/exercises_part4.js";

console.log(countCharacter("Hola Mundo")); //check
console.log(sliceChar("Hola Mundo", 4)); //check
console.log(stringToArray("Hola que tal", " ")); //check
console.log(repeatString("Hola Mundo", 3)); //check

console.clear();

console.log(invertirPalabra("Hola Mundo")); //check
console.log(palabrasRepetidas("Hola Mundo Hola", "Hola")); //check
console.log(palaindromo("Salas")); //check
console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")); //check

console.clear();

console.log(numAletorio()); //check
console.log(esCapicua(2002)); //check
console.log(factorial(5)); //check

console.clear();

console.log(esPrimo(7));
console.log(ParImpar(5));
