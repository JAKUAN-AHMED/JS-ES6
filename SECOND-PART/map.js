// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array


//double
function doubleIt(a)
{
    return a*2;
}

//array 
const numbers=[1,2,3,4];
const result=numbers.map(doubleIt);
const result1=numbers.map(n=>n%2===0)
// console.log(result1);

//first letter
const friends=['rahim','karim','azad'];
const res=friends.map(name=>name[0]);
// console.log(res);


//return length
const ans=friends.map(friend=>friend.length);
console.log(ans);