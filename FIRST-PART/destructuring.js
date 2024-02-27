const mobile={
    first:'samsung',
    second:'iphone',
    third:'Nokia',
}
//destructuring

const {third:real,...phone}=mobile;
console.log(phone);