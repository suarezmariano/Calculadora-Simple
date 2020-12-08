const chalk = require('chalk');
const log = console.log;

function sumando (numero1, numero2){
       if ( isNaN(numero1) || isNaN(numero2)){
        return log(chalk.red("Debe ingresar dos números"));  
    }
    return log(chalk.white.bgRed.bold(numero1 + numero2));
}
function restando (numero1, numero2){
    if ( isNaN(numero1) || isNaN(numero2)){
        return log(chalk.red("Debe ingresar dos números"));  
      
    }
    return log(chalk.white.bgRed.bold(numero1 - numero2));
}
function multiplicando (numero1, numero2){
    if ( isNaN(numero1) || isNaN(numero2)){
        return log(chalk.red("Debe ingresar dos números"));  
    }
    return log(chalk.white.bgRed.bold(numero1 * numero2));
}
function dividiendo (numero1, numero2){
    if ( isNaN(numero1) || isNaN(numero2)){
        return log(chalk.red("Debe ingresar dos números"));  
    }
    if (numero2 == 0){
        return log(chalk.red("No se puede dividir por cero"));
    }
    return log(chalk.white.bgRed.bold(numero1 / numero2));
}

module.exports = {funcionSumar : sumando, funcionRestar : restando, funcionDividir : dividiendo, funcionMultiplicar : multiplicando};