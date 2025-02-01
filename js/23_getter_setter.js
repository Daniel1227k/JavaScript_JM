class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() {
    console.log("Soy un perro y ladro");
  }
  ladrar() {
    console.log("Guaau guaua");
  }
  static queEres() {
    console.log("Soy un perro y punto");
  }
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
console.log(scooby);

console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);
