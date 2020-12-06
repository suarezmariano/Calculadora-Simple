const calculadora = require(__dirname +"/funciones");
const process = require("process");

let funcion = process.argv[2];
let num = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);

switch (funcion) {
    case "sumar":
        console.log(calculadora.funcionSumar(num,num2));
        break;
    case "restar":
        console.log(calculadora.funcionRestar(num,num2));            
        break;
    case "dividir":
        console.log(calculadora.funcionDividir(num,num2));
        break;
    case "multiplicar":
        console.log(calculadora.funcionMultiplicar(num,num2));
        break;
}