"use strict";

const ejercicio1 = (numeroIf) => {
    if (numeroIf > 0) {
        console.log(`El numero ${numeroIf} es positivo`);

    } else {
        console.log(`El numero ${numeroIf} es negativo`);

    }

}

const ejercicio2 = (numeroWhile) => {
    while (numeroWhile < 3) {
        console.log(`Valor de numeroWhile ${numeroWhile}`);
        numeroWhile++;

    }

}

const ejercicio3 = (numeroWhile) => {
    do {
        console.log(`Valor de dowhile ${numeroWhile}`);
        numeroWhile++;

    }
    while (numeroWhile < 3);

}

const ejercicio4 = (numeroFor) => {
    for (let index = numeroFor; index <= 3; index++) {
        console.log(`Valor de numeroFor ${index}`);

    }

}

const ejercicio5 = (estacion) => {
    switch (estacion.toLowerCase()) {
        case "invierno":
            console.log(`Esta en invierno que bueno`);
            break;
        case "verano":
            console.log(`Esta en verano que bueno`);
            break;
        case "otono":
            console.log(`Esta en otoño que bueno`);
            break;
        case "primavera":
            console.log(`Esta en primavera que bueno`);
            break;

        default:
            console.log(`Estacion no valida`);
            break;
    }
}
(() => {
    /*     
    En este ejercicio practicarás las estructuras de control, para ello deberás crear:
    
    Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
    Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
    
    Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
    
    Incrementar el valor de la variable en uno cada vez que se ejecute.
    
    Mostrarlo por pantalla cada vez que se ejecute.
    
    Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
    
    Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
    
    Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación. 
    */
    const numeroIf = -1;
    ejercicio1(numeroIf);
    const numeroWhile = -1;
    ejercicio2(numeroWhile);
    ejercicio3(2);
    const numeroFor = 0;
    ejercicio4(numeroFor);
    ejercicio5("VERANO");
})();

