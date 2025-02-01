//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
export const esPrimo = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return `El ${num} No es primo`;
  }
  return `El ${num} es primo`;
};

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
export const ParImpar = (num) => {
  let comp = num % 2;

  return comp === 0 ? `El numero ${num} es Par` : `El numero ${num} Impar`;
};

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
export const convertirTemperatura = (valor, unidad) => {
  if (unidad.toUpperCase() !== "C" && unidad.toUpperCase() !== "F") {
    throw new Error(
      "Unidad no válida. Usa 'C' para Celsius o 'F' para Fahrenheit."
    );
  }
  if (unidad.toUpperCase() === "C") {
    const fahrenheit = (valor * 9) / 5 + 32;
    return `${fahrenheit}°F`;
  } else {
    const celsius = ((valor - 32) * 5) / 9;
    return `${celsius.toFixed(2)}°C`;
  }
};
