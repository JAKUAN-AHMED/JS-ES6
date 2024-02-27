const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
//access address
// console.log(user.address.street?.second);


//another chain in array
const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}
//access name of data
console.log(products.data[1].name)