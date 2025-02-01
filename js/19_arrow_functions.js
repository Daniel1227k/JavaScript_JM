//Arrow functions

// const saludar = () => console.log("Hola");
// saludar();
const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Daniel");

const sumar = (a, b) => a + b;
console.log(sumar(8, 9));

const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};
funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((e, i) => console.log(`${e} esta en la posicion ${i}`));

// function Perro() {
//   console.log(this);
// }

// Perro();

const perro = {
  nombre: "Perro",
  ladrar() {
    //No usar arrow functions en objetos
    console.log(this);
  },
};

perro.ladrar();
