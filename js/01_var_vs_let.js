var hola = "Hola Mundo"; //Var no tiene scoop - ambito de bloque - hoisting
let hello = "Hello world";

console.log(hola);
console.log(window.hola);
console.log(window.hello);

//Mala practica var
var musica = "Rock";
console.log("Variable musica antes del Bloque", musica);
{
  var musica = "Pop";
  console.log("Variable musica Dentro del Bloque", musica);
}
console.log("Variable musica Despues del Bloque", musica);

console.log("================let vs var============================");

let musica2 = "Rock";
console.log("Variable musica antes del Bloque", musica2);
{
  let musica2 = "Pop";
  console.log("Variable musica Dentro del Bloque", musica2);
}
console.log("Variable musica Despues del Bloque", musica2);
