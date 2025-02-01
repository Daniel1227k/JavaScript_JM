//Expresiones regulares

let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae, quibusdam consequatur saepe nemo ad ullam vel voluptas. Incidunt, debitis magnam eligendi accusantium rerum autem nobis. Sint lorem 1 unde facere inventore!";

let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/gi;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
