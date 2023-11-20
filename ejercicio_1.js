const scanner = require("prompt-sync")({sigint: true});
let edad=0;
let nombre="";
let permisoConducir=false;

nombre=scanner("Introduce tu nombre=> ");
edad=scanner("Introduce tu edad => ");

if(edad<18)
{
    permisoConducir=true;
    console.log("No tiene Permiso SUDO SU");

}else{
    permisoConducir=false;
    console.log("YA puedes sacarte en carnet de conducir, desgraciado trabaja!!!");
}

