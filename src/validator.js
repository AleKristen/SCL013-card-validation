//se declara constante validador, que contiene el ejercicio de validar y enmascarar
const validador = {
  //declara "isValid" como "numLuhn", que contiene el algoritmo de Luhn
  //numTarjeta-> numIngresado-> numResultado (->numLuhn) <3
    isValid : (numLuhn)=>{
  //se declara la variable "numReverso" 
  //se crea un nuevo array a partir de numLuhn y revierte los numeros
      let numReverso = Array.from(numLuhn).reverse();
  //"suma" declara que la suma de todos los numeros ingresados comiencen desde 0 
      let suma = 0;
  //se declara que el estado natural del ejercicio es verdadero
      let estado = true; 
  //variable i empieza desde 0; condicional: hasta donde ocurre el bucle (for); incrementa 1 (i++)para que el bucle se aplique en todas los numeros ingresados
      for (let i = 0; i < numReverso.length; i++) {      
  //con el residuo de 2 se descubre si es una posición par
  //a los numeros ubicados en una posición par se le aplica residuo y si da cero se multiplica x2
  //esto define posición
        if ((i + 1) % 2 == 0) { 
  //solo si la variable [i] esta en una posición par se multiplica x2
          numReverso[i] = numReverso[i] * 2; 
  //Si la multiplicación de la suma es un numero mayor a 9 hay que restarle 9
          if (numReverso[i] > 9) { 
          numReverso[i] = numReverso[i] - 9;
          }
        }
  //suma numeros pares e impares y sin el parseInt aparece como NaN 
        suma += parseInt(numReverso[i]);
      }
  //si la suma de todos los numeros con el residuo da 0, es verdadero
        if (suma % 10 == 0 ){
          estado == true; 
        }
  //si la suma de todos los numeros no da residuo 0, es falso
        else {
          estado = false; 
        }         
  //devuelve la respuesta de si el estado es verdadero o falso      
        return estado;
        },
  //declara "maskify" como "numLuhn", que contiene el enmarcarado
    maskify : (numLuhn)=>{
  //se declara la variable "numMask" 
  //crea un nuevo array a partir de numLuhn y enmascara los números
      let numMask = Array.from(numLuhn);
  //variable i empieza desde 0; condicional: hasta donde ocurre el bucle (for)(en este caso hasta la longitud del numero (16); incrementa 1 (i++) para que el bucle se aplique en todos los numeros ingresados       
      for (let i = 0; i <=numMask.length; i++) {
  //se enmascara hasta la longitud del numero (en este caso 16) restandole 4 (de derecha a izquierda)
  //independientemente de la cantidad de numeros que haya
        if (i<numMask.length-4){
          numMask[i]="#";
        }
      }
  //devuelve el numero enmascarado junto 
        return numMask.join("");
    }
  };
  //linkea la constante validator al index.js (desde linea 50 validator.js a linea 2 index.js)
  export default validador;