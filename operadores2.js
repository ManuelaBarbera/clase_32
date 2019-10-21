//let numero = 2 + 2;
//let suma = numero + 6;
//console.log(suma)
//let otraSuma = suma++ //NaN
//console.log(suma)
//console.log(saludo != otroSaludo) //comparación simple (pregunta diferencias)
//console.log(saludo !== otroSaludo) //comparación estricta (pregunta diferencias)
//numero > otroNumero
//numero < otroNumero
//numero >= otroNumero
//numero <= otroNumero
//Operadores lógicos
// && (y)
//console.log(true && true) //true
//console.log(true && false) //false
//console.log(false && false) //false
//console.log(false && true) //false

// || (o)

//console.log(true || false ) //true
//console.log(false || true) //true
//console.log(true || true) //true
//cinsole.log(false || false) //false

//! negación
//console.log(!true) //false
//console.log(!false) //true

// !! negación

//console.log(!! true) //true
//console.log(!!false) //false


//EJERCICIO 34
let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;

console.log("Objetivo de ingresos: " , ingresos >=800); 
console.log("Objetivo de impuestos: " , ganancias<400); 
console.log("Bono de ganancias: " , impuestos==600); 


//EJERCICIO 36
let numero1 = 10;
let numero2 = 20;

console.log("La variable numero1 y numero2 tienen el mismo valor: " , numero1 == numero2); 
console.log("La variable numero1 y numero2 son distintas: " , numero1 != numero2); 


//EJERCICIO 37
let promedioParaAprobar = 6;
let promedioDelAlumno = 4;

console.log("El alumno tiene un promedio mayor o igual que el requerido: " , promedioDelAlumno >= promedioParaAprobar);

console.log("Al alumno le faltaron",promedioParaAprobar - promedioDelAlumno ,"puntos para aprobar")