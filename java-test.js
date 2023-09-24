// Q.1**********

// let nums =[3,2,2,3];
// let val = 3;

// const occuredElement =(nums,val)=>{
//     let newNums= nums.filter((occured)=>{
//       return occured !== val;
//     })
//     return newNums
// }
// let occurance= occuredElement(nums,val);
// console.log(occurance,"occurance")






//Q.2**********

// const checkPalindrome =(...x)=>{
//     if(x.join('') ===x.reverse().join('')){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(checkPalindrome(1,2,1),"check")







//Q.3************


// const calculateSum = (array)=>{
//     let totalSum = 0;
//     for(let i=0; i < array.length; i++){
//         totalSum += array[i];
//     }
//     return totalSum
// }
// console.log(calculateSum([1,2,3,4,5]),"total");





//Q.4**************

// const isPalindrome=(str)=>{
//     const res = str.split('').reverse().join('');
//     if(res === str){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// console.log(isPalindrome("tat"),"check")






//Q.5*****************


// const reverseArray =(array)=>{
//     const reversedArray = array.reverse();
//     return reversedArray
// }
// console.log(reverseArray([1,2,3,4]),"reverse")



//Q.6**************


// const removeDuplicate =(array)=>{
//     let newArray=[]
//     for (let i=0;i < array.length; i++)
//     if(array[i] !== array[i+1])
//     newArray.push(array[i])
// return newArray
// }
// console.log(removeDuplicate([1,2,3,2,4]),"check");







// Q.10 ****************

// const sortedArray =(array)=>{
//     return array.sort()
// }
// console.log(sortedArray([1,3,5,4,6,2]),"sortedArray");








//Q.13 **************

// const position =(array)=>{
//     let target = 8;
//     let result =[];
//     for(let i=0; i < array.length; i++)
//     if (array[i] == target)
//     result.push(i)
// return result;
// }
// console.log(position([5,7,7,8,8,10]),"output")






//Q.15 **************

const duplicateCharacter =(str)=>{
    
}