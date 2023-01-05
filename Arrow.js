//a. Print odd numbers in an array:

// var odd=(array)=>{
//     var result = [];
//     for(var i = 0; i < array.length;i++){
//         if(array[i]%2!==0){
//         result.push(array[i]);
//     }
// }
// return result;    
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

//b. Convert all the strings to title caps in a string array:

// var string=(array)=>{
//         var str2 = array[0].charAt(0).toUpperCase() + array[0].slice(1);
//         return str2;
//         }
//         console.log(string(["hello"]));


//c. Sum of all numbers in an array:

// var arrc = [1,2,3];
// var sum=0;
// var resu= arrc.forEach((ele)=>sum+=ele);
// console.log(sum);

//O/p: 6


//d. Find prime number:

// var arr= [2,3,4,5,6,7,8,9,10,11,12];
// var res= arr.filter((num)=>{
//     for(var i=2; i<=Math.sqrt(num); i++){
//     if(num%i==0)
//     return false;
//     }
//     return true;
// });
//     console.log(res);

//e Return all the palindromes in an array:

// var parr= ["malayalam", "dad", "mom", "god"];
// var carr=[];
// var a= ()=>{
//     for(var i=0; i<parr.length; i++) {
//         var b = parr[i].split("").reverse().join("");
//         if(parr[i]==b) {
//             carr.push(b);
//         }
//     }
//     return carr;
//     }
//     console.log(a());
    
