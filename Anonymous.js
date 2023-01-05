//1.Do the below programs in anonymous function & IIFE:

//AnonymousFunction:

// a. Print odd numbers in an array:

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var result = [];
var odd = function(array){
    for(var i = 0; i < array.length;i++){
        if(array[i]%2!==0){
            result.push(array[i]);
    }
}
return result;
}
console.log(odd(array));


//b. Convert all the strings to title caps in a string array

var arr = ["hello"];
var a = function(){
    var str2 = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    console.log(str2);
}
a();


//c. Sum of all numbers in array:

var arr = [1,2,3,4,5];
var a= function(){
    sum=0;
    for(var i =0; i < arr.length; i++) {
        sum=sum+arr[i];
    }
    console.log(sum);
    }
    a();


// //d. Find prime number;

var arr= [2,3,4,5,6,7,8,9,10,11,12];
var a= function(){
var res= arr.filter((num)=>{
    for(var i=2; i<=Math.sqrt(num); i++){
    if(num%i==0)
    return false;
    }
    return true;
})
return res;
}
    console.log(a());


//e. Palindrome:

var parr= ["malayalam", "dad", "mom", "god"];
var carr=[];
var a= function(){
    for(var i=0; i<parr.length; i++) {
        var b = parr[i].split("").reverse().join("");
        if(parr[i]==b) {
            carr.push(b);
        }
    }
    return carr;
    }
    console.log(a());
    

//f Return median of two sorted arrays of the same size

let a = [1,2,3,4];
let b = [5,6,7,8];
let arr = a.concat(b);
let median;

let c = function(){
   let middleIndex = Math.floor(arr.length/2)
   median = (arr[middleIndex] + arr[middleIndex - 1])/2;
   return median;
}

console.log(c());

//g Remove duplicates from an array

var arr = [1,1,2,2,3,3,4,4];

var a = function(arr){
    var b =[...new Set(arr)];
    return b;
}
console.log(a(arr));

//h Rotate an array by k times

var rotate =  function(a,k){
    for(var i=0; i<k; i++){
        a.unshift(a.pop())
}
return a;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9],4));
