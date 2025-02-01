//Operadores de cortocircuito
function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar();
saludar("Cadena" || "Valor de la derecha");
console.log([] || "valor de la derecha");
console.log(false || "Valor de la derecha");

console.log(false && "valor de la derecha");
console.log([] && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
