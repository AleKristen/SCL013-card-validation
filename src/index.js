//importa constante validador desde validator.js
import validador from './validator.js';

//prueba numero tarjeta valido 4137894711755904
//Pantalla1
document.getElementById("pantalla2").style.display="none";
document.getElementById("cuadro3").style.display="none";
document.getElementById("cuadro4").style.display="none";
//Botón1 lleva a pantalla2
document.getElementById("boton1").addEventListener("click", ()=>{
  document.getElementById("pantalla2").style.display="block";
  document.getElementById("pantalla1").style.display="none";
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
});
//AQUI PARTEN LAS OPERACIONES
//Botón2 lleva a: dependiendo de si el valido o no el numero ingresado
document.getElementById("boton2").addEventListener("click", ()=>{
  document.getElementById("cuadro3").style.display="none";
  document.getElementById("cuadro4").style.display="none";
  document.getElementById("pantalla1").style.display="none";
//Se declara una constante (numIngresado) que llama al número que se ingresa en numTarjeta con un valor
  const numIngresado = document.getElementById("numTarjeta").value;
//Se declarar variable para numResultado valido (resultado)
  let numResultado = true;
//Se declarar variable para ocultar numero con # (numOculto)
  let numOculto;
//La variable "numResultado" se conecta con el validator(is.Valid)(ya que contiene la formula) que se aplicara a la constante numIngresado
//"validador" son las dos operaciones y el "isValid" es la operacion especifica de validación
  numResultado = validador.isValid(numIngresado);
//SI: todos los numeros dan valor 0 (osea que no se han ingresado numeros)
    if (numIngresado.length == 0) {
//Se envia mensaje de alerta y no permite continuar a la otra pagina
        contenedorVacio.classList.remove('contenedorOculto');
        contenedorAlerta.classList.add('contenedorOculto');
          document.getElementById("cuadro2").style.display="block";
          document.getElementById("cuadro3").style.display="none";
          document.getElementById("cuadro4").style.display="none";
    }
    else{
//TAMBIEN: si el "numResultado" (de la operacion que se le hace al numero ingresado) es falso 
//Lleva al cuadro3
      if (numResultado == false) {
        numOculto= validador.maskify(numIngresado);
          document.getElementById("cuadro3").style.display="block"; 
          document.getElementById("cuadro2").style.display="none"; 
          document.getElementById("numMaskify").innerHTML = numOculto;
      }
//No declara nuevamente true por que esta declarado arriba (linea 35)
      else {
//TAMBIEN: el numOculto sera el resultado del numIngresado con el validator y el enmascarado aplicados
//"validador" son las dos operaciones y el "maskify" es la operacion especifica
        numOculto= validador.maskify(numIngresado);
//Como es true lleva al cuadro4
          document.getElementById("cuadro4").style.display="block";
          document.getElementById("cuadro2").style.display="none";
//Cambia numMaskify1 (que es el numero ingresado) por numOculto (que es el enmascarado)
          document.getElementById("numMaskify1").innerHTML = numOculto;
        }
    } 
});