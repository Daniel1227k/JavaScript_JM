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
  }
  sonar() {
    console.log("Soy un perro y ladro");
  }
  ladrar() {
    console.log("Guaau guaua");
  }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
console.log(scooby);

mimi.sonar();
scooby.sonar();
scooby.ladrar();
