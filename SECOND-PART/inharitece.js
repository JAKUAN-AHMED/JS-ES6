class animal{
    dog()
    {
        console.log('gew......gew')
    }
}
class child extends animal{
    childDog()
    {
        console.log('mew.........mew')
    }
}
/* const newObj=new child();
newObj.dog();
newObj.childDog(); */
class Vehicle{
    constructor(name, price, seat, ticketPrice){
        this.name=name;
        this.price=price;
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}
const obj=new Truck('car',1500,15,150);
console.log(obj.load);