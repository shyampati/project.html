//Find the Product.
//Write a program that takes an array as input from the user and find out the product of the elements.
const Find_Prod = (array, N) => 
{
 let product=1;
 for(let i=0;i< N;i++){
  product=product*array[i];
 }
 return product;
};



//Find the Sum.
//Write a program which takes an array as input from the user and find out the sum of the array elements.


const Find_Sum = (array, N) => 
    {
     let sum=0;
     for(let i=0;i< N;i++){
      sum=sum+array[i];
     }
     return sum;
    };

    // Count Occurrences
//You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.

const findCount = (N, K, Arr) => 
    {
       let sum=0;
       for(let i=0 ; i< N ; i++ ){
         if(Arr[i] === K){
            sum+=1;
             } 
                }
                 return sum;
   };

   // Even Odd
//You are given an array A containing N integer elements, and your task is to return an array B (having a size equal to 2), where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.

const findEvenOdd = (N, Arr) => 
{
    let A=[2];
    let even=0;
    let odd=0;
    for(let i=0;i< N;i++){
      if(Arr[i]%2===0){
        even+=Arr[i];
      }
      else{
        odd+=Arr[i];
      }
    }
    A[0]=even;
    A[1]=odd;
    return A;
};



//Find whether the number is present or not.
//Write a program which takes an array as input from the user and a number. Check whether the number is present or not.

const Find_Num = (array,N,M) => 
{
  for(var i=0; i< N ; i++){
    if(M === array[i]){
      return "YES";
    }
  }
  return "NO";
};

//Higher Age.
//You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18 (18 included).
const highAge = (N, Arr) => 
{
  let arr = [];
  let j = 0;
    for( i = 0; i < N; i++){
      if(Arr[i]>=18){
        arr[j] = Arr[i];
        j = j + 1;
    }
    }
    return arr;
};

//Increment the Array Elements.
//You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
Y//ou have to complete Inc_Arr. No need to take any input.
const Inc_Arr = (array,N) => 
{
    array.forEach(function(element){
        console.log(element + 1);
    })
};

// pass or Fail
//You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.
//If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).

const isAllPass = (N, Arr) => 
    {
        let count=0;
        Arr.forEach(function(ele) {
            if(32 <= ele){
             count+=1;
            }
            });
            if(count === N){
                return "YES";
            }
            else{
                return "NO";
            }
    };

    //Unique Color Shirt.
///Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe.Prepbuddy wants you to find M.
  function Unique_Shirts (arr,N) {
        let arr1=Array(10000).fill(0);
        for(let p of arr){
          arr1[p]+=1
        }
        let count=0;
        for (let p of arr1){
          if(p===1){
            count+=1
          }
        }
        return count;
      } 

      //Min and Max.
//Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.
function arrayMin(arr) {
    let min = (Math.min(...arr));
      return min;
  }
  
  function arrayMax(arr) {
    let max = (Math.max(...arr));
      return max;
  }