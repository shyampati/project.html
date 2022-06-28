//Que1 //Add two Numbers

const AddTwoNumbers = (a,b) =>{
    return a+b;
  };
  
  
  //Que2 //Find if the conditions are obeyed or not?
  
  const Is_Valid = (a,b) =>{
    return ( a<10 && a>b)?true:false
  };
  
  
  //Que3 //Check the conditons
  //You are given two numbers 
  //A
   //and 
  //B
  //. You need to do the following checks:
  
  //if both are divisible by 10 console true.
  //if both are not divisible by 10 console false.
  //if one of them only is divisible by 10 console true.
  //Use operator to do this.
  
  //Note: You have to complete Check function. No need to take any input.
  
  const Check = (A, B) => 
  {
      if (A%10 == 0 && B%10 == 0){
      return true;
  }
  else if (A%10 != 0 && B%10 !=0){
    return false;
    
  }
    else {
    return true;
  }
  };
  
  
  //Que4 //Find the first digit of a 4 digit number
  const First_digit = (n)=>{
    return parseInt(n/1000)
  };
  
  
  //Que5 //Find the last digit of a 4 digit number
  
  const Last_Digit = (n) => {
    return n%10
  };
  
  
  //Que6 //Find the remainder
   const Find_the_remainder = (a,b) =>{
     return b%4
   };
   
  
   //Que7//Multipy two Numbers
  
   const Multiply_two_number = (a,b) => {
    return a*b
  };
  
  
  //Que8 //Marks Calculator
  
  const Sum = (A, B, C) => 
  {
   return A+B+C
  };
  
  const Average = (A, B, C) => 
  {
   return (A+B+C)/3
  };