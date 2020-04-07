import validator from './validator.js';

document.getElementById("pantalla2").style.display="none";
document.getElementById("pantalla3").style.display="none";
document.getElementById("pantalla4").style.display="none";

document.getElementById("boton1").addEventListener("click", ()=>{
    
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="none";
    
});

document.getElementById("boton2").addEventListener("click", ()=>{
    
    document.getElementById("pantalla3").style.display="block";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla4").style.display="none";
    
});

document.getElementById("boton3").addEventListener("click", ()=>{
//(funcionvalido)
    //funcionvalido
    document.getElementById("pantalla4").style.display="block";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="none";
    
});

document.getElementById("boton4").addEventListener("click", ()=>{
    
    document.getElementById("pantalla1").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="none";
    
});
//desde aqui se arruina todo xd

 const numTarjeta = document.getElementById("creditCardNumber").value;

      let estadoTarjeta = true;
      let estadoTarjeta == false;
      let numOculto;

      estadoTarjeta = validator.isValid(numTarjeta);

      if (numTarjeta.length == 0 ) {
        alert("Debes llenar el campo");
        document.getElementById("pantalla3").style.display="none";
        document.getElementById("pantalla2").style.display="block";
      }

      else{

        if (estadoTarjeta == false) {
        numOculto= validator.maskify(numTarjeta);
        
        document.getElementById("pantalla2").style.display="none";
        document.getElementById("pantalla4").style.display="block";
        }

      else (estadoTarjeta == true) {
            numOculto= validator.maskify(numTarjeta);
            document.getElementById("pantalla2").style.display="none";
            document.getElementById("pantalla3").style.display="block";
        }
    }
    
});