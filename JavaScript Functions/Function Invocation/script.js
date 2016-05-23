var talk = function(saywhat) {
    console.log(saywhat);
}

var Dog = function() {
    var name, breed;
}

var Cat = function() {
    var name, breed;
}

Dog.prototype.speak = talk;
Cat.prototype.speak = talk;

firstDog = new Dog();
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak("Woof")

firstCat = new Cat();
firstCat.name = "Sniggles";
firstCat.breed = "Manx";
firstCat.speak("meowCat")

//// Part 2.2
//var Dog = function() {
//    var name, breed;
//    return console.dir(this);
//}
//
//firstDog = new Dog();
//firstDog.name = "Rover";
//firstDog.breed = "Doberman";
//
//secondDog = new Dog();
//secondDog.name = "Fluffy";
//secondDog.breed = "Poodle";

//// Part 2.1
//var calc = {
//    status: 'Awesome',
//    plus: function (a,b) {
//        return (
//            console.log(this),
//            console.log(a + b),
//            console.log(arguments),
//            console.log(this.status)
//        )
//    }
//}
//
//calc.plus(2,2);

////Part 1
//function plus(a,b) {
//    return (
//        console.log(a+b),
//            console.log(this),
//            console.log(arguments)
//    )
//};
//plus(2,2);

//var plus = function(a, b) {
//    return console.log(a+b);
//}(2,2);

//function plus(a, b) {
//    var sum = a+b;
//    return sum;
//}

//console.log(plus(2,2));