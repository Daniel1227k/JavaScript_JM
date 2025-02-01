// Objetos - coleccion de llaves valores
const b = {};
//con el constructor
const c = new Object();

console.log(b);

const daniel = {
  nombre: "Daniel",
  apellido: "Cruz",
  edad: 22,
  pastaiempos: ["correr", "Ejercicio", "estudiar"],
  soltero: true,
  contacto: {
    email: "micorreo@gmail.com",
    twitter: "@daniel",
    movil: "678123667135",
  },
  //metodos
  saludar: function () {
    console.log("Hola");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twiter`
    );
  },
};

console.log(daniel);
//Acceder a los atributos(propiedad) de un objeto
console.log(daniel.nombre);
console.log(daniel.apellido);
console.log(daniel["edad"]); //otra forma
console.log(daniel.pastaiempos);
console.log(daniel.pastaiempos[1]);
console.log(daniel.contacto.twitter);
daniel.saludar();
daniel.decirMiNombre();

//Metodos del protoypo Object
console.log(Object.keys(daniel));
console.log(Object.values(daniel));
console.log(daniel.hasOwnProperty("nombre"));
