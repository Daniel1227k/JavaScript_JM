//Funciones anonimas autoejecutables

(function () {
  console.log("Mi primer IIFE");
})();

(function (d, w, c) {
  console.log(d);
  console.log(w);
  c.log("Este es un console.log");
})(document, window, console);
