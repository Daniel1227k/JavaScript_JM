//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
export const invertirPalabra = (string) => {
  let palabraInvertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    palabraInvertida += string[i];
  }
  return palabraInvertida;
};

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
export const palabrasRepetidas = (texto, palabra) => {
  texto = texto.toLowerCase();
  palabra = palabra.toLowerCase();
  let contador = 0;

  const palabras = texto.match(/\b\w+\b/g);

  for (const element of palabras) {
    if (element === palabra) {
      contador++;
    }
  }
  return contador;
};
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
export const palaindromo = (palabra) => {
  palabra = palabra.toLowerCase().replace(/[^a-z0-9]/g, "");

  let palabraInvertida = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }

  return palabraInvertida === palabra;
};

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

export const eliminarPatron = (texto, patron) => {
  const regex = new RegExp(patron, "gi");
  let resultado = texto.replace(regex, "");

  resultado = resultado.replace(/\s*,\s*/g, ", ").trim();

  return resultado;
};
