//loops - ciclos - Bucles
let contador = 0;
while (contador <= 10) {
  console.log("While " + contador);
  contador++;
}

contador = 0;
do {
  console.log("do while " + contador);
  contador++;
} while (contador <= 10);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

const daniel = {
  nombre: "Daniel",
  apellido: "Cruz",
  edad: 22,
};
for (const propiedad in daniel) {
  console.log(`Key:${propiedad} value: ${daniel[propiedad]}`);
}

for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = "Hola Mundo";

for (const caracter of cadena) {
  console.log(caracter);
}
