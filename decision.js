// 1) calculator
switch(operator){
  case '+':
  return B+C;
  case '-':
  return B-C;
  case '*':
  return B*C;
  case '/':
  return B/C;
}
// 2)Check whether the condition is fulfilled or not?
const Check_divisibility = (N) => {
  if((N%6==0) && (N%9==0))
  {return "Divisible by both";}
  else{
    return "Not Divisible by both" ;
  }
};

//3) Eligible Voter
const isEligible = (a) => {
  if(a>18){
               return "Eligible for Voting";
             }else{
               return "Not Eligible for Voting";
             } 
     
 };
//4) Find Relation
onst findRelation = (x,y) => {
  if(x<y){
    return x + ' is smaller than ' + y
  }
  else if(x>y) {
     return x + ' is greater than ' + y
  }
  else if(x==y){
     return x + ' is equal to ' + y
  }
    
};
//5)  finding grade
const findGrades = (a) => {
  switch(true){
   case a<=10:
     return 'E'
      break;
   case a>=11 && a<=20:
     return 'D'
       break;
   case a>=21 && a<=30:
     return 'C'
       break;
   case a>=31 && a<=40:
     return 'B'
       break;
   case a>=41 && a<=50:
     return 'A'
       break;
   default:
     return -1
  }

//6) Get Value
const getValue = (a) => {
  if(a=="p" || a=="P"){
             return "PrepBytes";
           }else if(a=="z" || a=="Z"){
             return "Zenith";
           }else if(a=="e" || a=="E"){
             return "Expert Coder"; 
           }else if(a=="d" || a=="D"){
             return "Data Structure"; 
           }else{
             return "No Data";
           }
};


//7) Find the maximum out of three numbers.
const Max_out_of_three = (A,B,C) => {
  if(A > B && A > C){
    return A;
  }
  else if(B > A && B > C){
    return B;
  }
  else if(C > A && C > B){
    return C;
  }
  else{
    return -1 ;
  }

};

//8)
// Smallest integer: Given three distinct integers and asked to find the smallest of the three

const findSndSmallest = (x,y,z) => {
  if(x > y && x > z && y>z){
    return y;
  }
  else if(x > y && x > z && y<z){
    return C;
  }
  else if(y > x && y > z && x>z){
    return x;
  }
  else if(y > x && y > z && x<z){
   return C;
  }
  else if(z > x && z > y && x>y){
      return x;
  }
  else if(z > x && z > y && x<y){
     return y;
  }
};
//9) Check whether triangle is acute or obtuse

const Triangle_Check = (A,B,C) => {
  if(A<90 && B<90 && C<90){
    return 'acute';
  }
  else if(B>90 && (A+B+C)==180){
    return 'obtuse';
  }
  else if(C>90 && (A+B+C)==180){
    return 'obtuse';
  }
  else if(A>90 && (A+B+C)==180){
    return 'obtuse';
  }
};