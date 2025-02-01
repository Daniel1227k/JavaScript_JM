function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

//Herencia prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del Protipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y yo ladro");
};
Perro.prototype.ladrar = function () {
  console.log("Guaaaaauuu Guaaauu");
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano");
const bunny = new Animal("Bunny", "Hembra");

console.log(snoopy);
console.log(bunny);

snoopy.sonar();
bunny.sonar();
