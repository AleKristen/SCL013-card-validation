import validador from './validator.js';

//Pantalla1
document.getElementById("pantalla2").style.display="none";
document.getElementById("cuadro3").style.display="none";
document.getElementById("cuadro4").style.display="none";
//Botón1 lleva a pantalla2
document.getElementById("boton1").addEventListener("click", ()=>{
  document.getElementById("pantalla2").style.display="block";
  document.getElementById("pantalla1").style.display="none";
});
//Botón3 volver al formulario - invalido
document.getElementById("boton3").addEventListener("click", ()=>{
  document.getElementById("cuadro2").style.display="block";
  document.getElementById("cuadro3").style.display="none";
  document.getElementById("cuadro4").style.display="none";   
});
//Botón4 volver a inicio - valido
document.getElementById("boton4").addEventListener("click", ()=>{
  document.getElementById("pantalla1").style.display="block";
  document.getElementById("pantalla2").style.display="none";
  document.getElementById("cuadro3").style.display="none";
  document.getElementById("cuadro4").style.display="none";
  document.getElementById("cuadro2").style.display="block";
});

//Botón2 lleva a: dependiendo de si el valido o no el numero ingresado
document.getElementById("boton2").addEventListener("click", ()=>{
  document.getElementById("cuadro3").style.display="none";
  document.getElementById("cuadro4").style.display="none";
  document.getElementById("pantalla1").style.display="none";

  const numIngresado = document.getElementById("numTarjeta").value;
  let numResultado = true;
  let numOculto;
  let contenedorVacio;
  let contenedorAlerta;
  numResultado = validador.isValid(numIngresado);

    if (numIngresado.length == 0) {
        contenedorVacio.classList.remove('contenedorOculto');
        contenedorAlerta.classList.add('contenedorOculto');
          document.getElementById("cuadro2").style.display="block";
          document.getElementById("cuadro3").style.display="none";
          document.getElementById("cuadro4").style.display="none";
          
    }
    else{
      if (numResultado == false) {
        numOculto= validador.maskify(numIngresado);
          document.getElementById("cuadro3").style.display="block"; 
          document.getElementById("cuadro2").style.display="none"; 
          document.getElementById("numMaskify").innerHTML = numOculto;
          document.getElementById("numTarjeta").value = "";
      }
      else {
        numOculto= validador.maskify(numIngresado);
          document.getElementById("cuadro4").style.display="block";
          document.getElementById("cuadro2").style.display="none";
          document.getElementById("numTarjeta").value = "";
          document.getElementById("numMaskify1").innerHTML = numOculto;
        }
    } 
 
});
