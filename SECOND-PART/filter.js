//filter() take a condition and returns according to the condition
//even numbers with bitwise and operation
const marks=[80,90,45,23,26,66];
const selected=marks.filter(num=>(num&1)===0);
// console.log(selected)


//filter friends length
const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)