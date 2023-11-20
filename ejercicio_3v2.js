const input = require("prompt-sync")({sigint: true});


let esCancelar = false 
let numImput
let num
let suma = 0

    while(!esCancelar){
        numImput = input ("Introduce un numero ==> ")
        
        if (Number(numImput)){
            num = Number(numImput)
            suma += num
        } else if (numImput !== 'cancelar') {
            console.log("Introduce un numero valido ==> ")
        } else {
            esCancelar = true
        }
       
       
    }
    console.log ("La Suma es ==> " +suma)
    
    