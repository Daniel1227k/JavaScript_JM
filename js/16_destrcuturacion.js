//Destructuracion
let numeros = [1, 2, 3];

//Sin destructuracion
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

// con destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
  nombre: "Daniel",
  apellido: "Cruz",
  edad: 15,
};

const { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);
