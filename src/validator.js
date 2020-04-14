const validador = {
  //numTarjeta-> numIngresado-> numResultado (->numLuhn)
    isValid : (numLuhn)=>{
  //invertir numero ingresado
      let numReverso = Array.from(numLuhn).reverse();
  //"suma" declara que la suma de todos los numeros ingresados comiencen desde 0 
      let suma = 0;
      let estado = true;
  //bucle
      for (let i = 0; i < numReverso.length; i++) {      
  //con el residuo de 2 se descubre si es una posición par
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
        if (suma % 10 == 0 ){
          estado = true; 
        }
        else {
          estado = false; 
        }         
  //devuelve la respuesta de si el estado es verdadero o falso      
        return estado;
        },
    maskify : (numLuhn)=>{
  //crea un nuevo array a partir de numLuhn y enmascara los números
      let numMask = Array.from(numLuhn);
  //bucle
      for (let i = 0; i <=numMask.length; i++) {
  //se enmascara el numero -4 hacia la izquierda
        if (i<numMask.length-4){
          numMask[i]="#";
        }
      }
  //devuelve el numero enmascarado  
        return numMask.join("");
    }
  };
  export default validador;