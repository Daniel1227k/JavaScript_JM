//Const - No se inicializan sin valor

let a;
const PI = 3.1416;

//PI = 3.17; - No se puede cambiar su contenido(al menos en primitivos)

console.log(PI);

a = "Yo";
console.log(a);

//En los tipos de datos complejos
const objeto = {
  nombre: "Daniel",
  edad: 35,
};

const colores = ["Blanco", "Negro", "Azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "micorreo@gmail.com";
colores.push("Naranja");

console.log(objeto);
console.log(colores);
