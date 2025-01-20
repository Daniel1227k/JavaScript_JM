//Condicionales - controla el flujo del programa
//if - else

let edad = 17;

if (edad > 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
if (edad < 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
if (edad <= 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//if anidados if - else if - else
let hora = 5;

if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

//Operador ternario (condicion) ? verdero : falsa
console.log("Operador ternario");

let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

//Switch case
//domingo:0 - sabado:6

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("El dia no existe");
    break;
}
