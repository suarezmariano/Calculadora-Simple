function sumando (numero1, numero2){
       if ( isNaN(numero1) || isNaN(numero2)){
        return "Debe ingresar dos números";  
    }
    return numero1 + numero2;
}
function restando (numero1, numero2){
    if ( isNaN(numero1) || isNaN(numero2)){
        return "Debe ingresar dos números"; 
      
    }
        return numero1 - numero2;
}
function multiplicando (numero1, numero2){
    if ( isNaN(numero1) || isNaN(numero2)){
        return "Debe ingresar dos números"; 
    }
        return numero1 * numero2;
}
function dividiendo (numero1, numero2){
    if ( isNaN(numero1) || isNaN(numero2)){
        return "Debe ingresar dos números"; 
    }
    if (numero2 == 0){
        return "No se puede dividir por cero";
    }
        return numero1 / numero2;
}

module.exports = {funcionSumar : sumando, funcionRestar : restando, funcionDividir : dividiendo, funcionMultiplicar : multiplicando};