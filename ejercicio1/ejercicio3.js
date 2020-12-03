


document.getElementById("boton").onclick = numeroAle; 
document.getElementById("caritafachera").style.visibility=false;
document.getElementById("caritafachera").style.opacity="0";
document.getElementById("caritafacheratriste").style.opacity="0";

function numeroAle(){

   // var numAle = Math.floor(Math.random()*(10-1)) + 1 ; 
   var numAle = Math.floor(Math.random()*(2-1)) + 1 ; 
    alert(numAle);

    var numeroIngre = document.getElementById("valorIngresado").value; 

    if(numAle == numeroIngre){

        alert("Numero Igual "); 
        document.getElementById("caritafachera").style.opacity="1";
        document.getElementById("caritafacheratriste").style.opacity="0";


    }else{



        alert("Numero diferente ");
        document.getElementById("caritafacheratriste").style.opacity="1";
        document.getElementById("caritafachera").style.opacity="0";
    }



}














