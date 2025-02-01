//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

export const numAletorio = () => {
  return Math.floor(Math.random() * 100) + 500;
};

//10) Programa una función que reciba un número y evalúe si es capicúa o no(que se lee igual en un sentido que en otro), pe.miFuncion(2002) devolverá true.
export const esCapicua = (num) => {
  const strNum = Math.abs(num).toString();
  const numReves = strNum.split("").reverse().join("");

  return strNum === numReves;
};

//11) Programa una función que calcule el factorial de un número(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120.
export const factorial = (num) => {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};
