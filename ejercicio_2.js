const scanner = require("prompt-sync")({sigint: true});
let nota;
let calificacion="";

nota=scanner("Introduce la nota=> ");
if(nota >=0 && nota <=3){
console.log (calificacion="Muy deficiente");   
}

if(nota >3 && nota <5){
    console.log("Insuficiente");   
}

if(nota >5 && nota <6){
    console.log("suficiente");   
}

if(nota >6 && nota <7){
    console.log("bien");   
}

if(nota >7 && nota <9){
    console.log("notable");
}

if(nota >9 && nota <=10){
    console.log("sobresaliente");   
}



