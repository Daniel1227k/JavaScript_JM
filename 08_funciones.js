// Functions - Bloque de codigo autocontenido - se define 1 vez - se reutilza las veces necesarias - puede devolver valore o no

// Funcion declarada
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}
//Invocacion de funcion
estoEsUnaFuncion();

function funcionDevuelveValor() {
  //return 19; solo puede haber 1 return - devuelve el primer return
  return "La funcion ha retornado una cadena de texto";
}
// valor retornado
let valorDeFuncion = funcionDevuelveValor();
console.log(valorDeFuncion);

// Funcion con parametros
function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Daniel", 22);
//Valores por defecto de la funcion
saludar();

//! Funciones declaradas vs funciones expresadas
funcionDeclarada();
function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada puede invocarse en cualquier parte de nuestro codigo incluso antes de ser declaradas"
  );
}
funcionDeclarada();

//Funcion anonima
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir una funcion que se le ha asignado valor a una variable, no se puede invocar antes de su declaracion"
  );
};
funcionExpresada();
