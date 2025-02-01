//Prototipos
/**POO
 * Clases: Modelo a Seguir
 * Objetos: Es una instancia de una clase
 *  Atributos - caracteristica o propiedad de un objeto
 *             (variables dentro de los objetos)
 *  Metodos - Acciones que un objeto hace (funciones dentro del obj)
 */

//Funcion constructora

// function Animal(nombre, genero) {
//*   Atributos
//   this.nombre = nombre;
//   this.genero = genero;
//*   Metodos
//   this.sonar = function () {
//     console.log("Hago sonidos porque estoy vivo");
//   };
//   this.saludar = function () {
//     console.log(`Hola me llamo ${this.nombre}`);
//   };
// }

//* FUncion con metodos al prototipo
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}
//Metodos agregados al prototipo
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

const snoopy = new Animal("Snoopy", "Macho");
const bunny = new Animal("Bunny", "Hembra");

console.log(snoopy);
console.log(bunny);

snoopy.sonar();
snoopy.saludar();

bunny.sonar();
bunny.saludar();
