//Objetos literales
let nombre = "Daniel",
  edad = 7;

const persona = {
  nombre: nombre,
  edad: edad,
  saludar: function () {
    console.log("¿Hola como estas?");
  },
};
console.log(persona);
persona.saludar();

//Con las nuevas funciones
const people = {
  nombre,
  edad,
  saludar() {
    console.log("¿Holaaa como estas?");
  },
};
console.log(people);
people.saludar();
