const max=Math.max(1,2,3,4,6,7,8);
//console.log(max);
const arr=[1,2,3,4,45,6];
const max1=Math.max(arr);
const max2=Math.max(...arr);
//console.log(max1);
//console.log(max2);

//copy
const student=['rahim','karim','anis'];
const teacher=[...student];
//console.log(...teacher);
student.push('nahim');
//console.log(...student);

//make separate
const updated=student.join(' ');
console.log(updated);

//advance
const advance=[...student,'mrinal'];
//console.log(...advance);
