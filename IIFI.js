// a. Print odd numbers in an array:

// (function odd(array) {
//     var result=[];
//     for(var i = 0; i<array.length;i++){
//         if(array[i]%2!==0){
//             result.push(array[i]);
//         }
//     }
//     console.log(result);
//     })
// ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);


//b. Convert all the strings to title caps in a string array

// (function caps(arr) {
//     var str2 = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
//     console.log(str2);
// }
//      )(["hello"]);

//c. Sum of all nnumbers in array:

// (function sum(arr){
//     var total = 0;
//     for(var i=0; i<arr.length; i++) {
//         total=total+arr[i];
//     }
// console.log(total);
// })
// ([1,2,3,4,5,6,7,8]);

//d Find prime number:

// (function prime(arr){
//   var res= arr.filter((num)=>{
//         for(var i=2; i<=Math.sqrt(num); i++){
//         if(num%i==0)
//         return false;
//         }
//         return true;
//     });
//         console.log(res);
// })
// ([2,3,4,5,6,7,8,9,10,11,12])

//e Palindrome:

// (function(parr){
//     var carr=[];
//     for(var i=0; i<parr.length; i++) {
//         var b = parr[i].split("").reverse().join("");
//         if(parr[i]==b) {
//             carr.push(b);
//         }
//     }
//     return carr;
//     })
//     (["malayalam", "dad", "mom", "god"]);


//f Return median of two sorted arrays of the same size

// (()=>{
//     let a = [1,2,3,4];
//     let b = [5,6,7,8];
//     let arr = a.concat(b);
//     let median;

//    let middleIndex = Math.floor(arr.length/2)
//    median = (arr[middleIndex] + arr[middleIndex - 1])/2;
//    console.log(median);
// })();

//g Remove duplicates from an array


// (function(arr){
//     var b =[...new Set(arr)];
//     console.log(b);
// })
// ([1,1,2,2,3,3,4,4])


//h Rotate an array by k times

// (function(a,k){
//     for(var i=0; i<k; i++){
//         a.unshift(a.pop())
// }
// console.log(a);
// })
// ([1, 2, 3, 4, 5, 6, 7, 8, 9],4);