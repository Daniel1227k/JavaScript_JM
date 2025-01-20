// Arrays - Arreglos
// coleccion de elementos

const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3][2]);
console.log(b[3][3][0]);

//Otra manera
const c = Array.of("x", "y", "z", 9, 8, 7);
console.log(c);

//Inicializar un arreglo con un valor por defecto
const d = Array(10).fill(false);
console.log(d);

//forma antigua de arreglos
const e = new Array();
const f = new Array(1, 2, 3, true, false);
console.log(e);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
colores.push("Negro");

console.log(colores);

colores.pop();
console.log(colores);

colores.forEach(function (elemento, index) {
  console.log(`<li id="${index}">${elemento}<li>`);
});
