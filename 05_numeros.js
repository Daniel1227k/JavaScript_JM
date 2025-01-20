// Numeros
let a = 2;
let b = new Number(4);
let c = 7.19;
let d = "5.6"; //String

console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(a));
console.log(typeof d);
console.log(a + b);
console.log(c + d); //Infiere el tipo y concatena
//casting
console.log(c + Number(d)); //parseInt(d)
console.log(c + parseFloat(d));
