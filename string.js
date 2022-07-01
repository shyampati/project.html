// Count the Vowels



var Count_Vowels= (S) => 
{
 
const vowels = S.match(/[aeiou]/gi); 
  return vowels.length;

};
 
// Concatenate the Strings
 


var Concatenate_Strings = (S1, S2) => 
{
  
   var str=''
   str=S1+S2; 
  return str

};
 
// Find Length



const findLength = (S) => 
{
    return S.length;
};
 

// Join Strings



const joinStrings = (S, P) => 
{
      let str=''
    str = S+P
    return str
    
};
 
// Reverse the String
 


var Reverse_String = (str) => 
{
  return str.split("").reverse().join("");
  
};
 
// Match the Strings



var String_Match = (S1,S2) => 
{
     
       if(S1==S2){
        return 'YES'
      }
      else{
        return 'NO'
      }
     
};
 
// String Replace






var Replace = (S, pattern , text) => 
{
        return S.replace(pattern,text)
      
};
 
// Split the String



var Split_the_string = (S) => 
{
  
 return S.split(" ");
};
 
// Count Characters



const countCharacters = (S) => 
{
     var B = [2];
  let countA = 0;
  let countD = 0;
  let i;
  for (i = 0; i < S.length; i++) {
    if (S[i] === "A") {
      countA += 1;
    } else if (S[i] === "D") {
      countD += 1;
    }
  }
  B[0] = countA;
  B[1] = countD;
  return B;
};
 
// Plaindrome Check
.

 
var Palin_Check = (str) =>
{
	  let result= str.split('').reverse().join('');
	 if(result === str){
	   return 'True';
	 }
	 else
	 {
	   return 'False';
	 }
}

// Count the Heads




var Count_Occ = (s) => 
{
    
      let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    });
        return (z.join(""));
  
};
 
// Find the Winner


 
var Game_Winner = (S) => 
{
 
   let countA= S.match(/[A]/gmi).length;
  let countD= S.match(/[D]/gmi).length;
  if(countA > countD)
  {
    return 'Aditya';
  }
   else if(countA < countD)
  {
    return 'Danish';
  }
  else
  {
    return 'Draw';
  } 
}
 
//que13:: Count the Vowels and Consonants



var Count_Vowels= (S) => 
{
  return S.match(/[aeiou]/gmi).length; 

};
var Count_Consonants= (S) => 
{
   
  return S.match(/[^aeiou]/gmi).length;   
};