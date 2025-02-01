// Strings

let nombre = "Mi nombre";
let apellido = "Mi apellido";
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti suscipit, odit dolor voluptas ipsam molestias reprehenderit provident quas. Officia beatae ipsam neque eaque id corporis quo excepturi, nobis ab blanditiis! ";

// Declaracion con el constructor
let saludo = new String("Hola Mundo");

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("dolor"),
  lorem.includes("Daniel"),
  lorem.split(" "),
  lorem.split(",")
);
