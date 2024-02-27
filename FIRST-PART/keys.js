const name={
    first:'ruble',
    second:'anas',
    third:'rabbi',
    fourth:'rayhan',
};
//console.log(name);
//keys=>
const keys=Object.keys(name);
// console.log(keys);

//values=>
// console.log(Object.values(name));

//entries=>two dimensional array
// delete name.fourth;
const TwoDimensional=Object.entries(name);
// console.log(TwoDimensional);


//freeze
// Object.freeze(name);
// delete name.fourth;
// console.log(name);

//seal
// Object.seal(name);
delete name.first;
name.price=100;
// console.log(name);