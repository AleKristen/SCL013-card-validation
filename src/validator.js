const validator = {
  isValid : (cardNumber)=>{
      let reverseNum = Array.from(cardNumber).reverse();
      let suma = 0;
      let estado = true; 

      
      for (let i = 0; i < reverseNum.length; i++) 
      {
      
        if (i%2 == 0) { /*numeros pares*/
            reverseNum[i] = reverseNum[i] * 2;
            if (reverseNum[i] >= 10) {
            reverseNum[i] = (reverseNum[i] - 10)+1;
            }
            else
         {
            n = numeros[i]-'0';
          }
          suma = suma + n;
         }
        }
        
      if (suma % 10 == 0 ){
        estado == true; 
      }
      else {
        estado = false; 
      }    
      
      return estado;
      },

  maskify : (cardNumber)=>{
      let card = Array.from(cardNumber);
        
        for (let i = 0; i <=card.length; i++) {
            if (i<card.length-4){
                card[i]="#";
            }
    
        }

};

export default validator;