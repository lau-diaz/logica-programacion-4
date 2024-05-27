function fibonacci(){
    let dato = prompt("Ingresa la cantidad de numeros de la secuencia de Fibonacci que deseas ver: ");
    let num = parseInt(dato);
    if (!isNaN(num) && num > 0){  
        let primerNum = 0, segundoNum = 1;

        console.log(primerNum);
        console.log(segundoNum);

        for (i = 2; i < num ; i++ ){
            let resultado = primerNum + segundoNum;
            console.log(resultado); 
            primerNum = segundoNum;
            segundoNum = resultado;
        }
    } else {
        console.error("Error, por favor ingrese un numero.");
        fibonacci();
    }
}



