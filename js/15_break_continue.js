//Break y continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i <= numeros.length - 1; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

for (let i = 0; i <= numeros.length - 1; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}
8;
