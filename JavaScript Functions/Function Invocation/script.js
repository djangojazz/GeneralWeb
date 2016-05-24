//// Part 2.5 Chaining arguments in a function
//var plus = function() {
//    var sum = 0;
//    for (var i = arguments.length - 1; i >= 0; i--) {
//        sum += arguments[i];
//    }
//    return sum;
//}
//
//console.log(plus(2,2,4))

//// part 2.4 Call and Apply
//var speak = function(what) {
//    console.log(what);
//}
//
//var saysomething = {normal: "meow", love: "purr"}
//speak.call(saysomething, saysomething.normal);
//speak.apply(saysomething, ['meoff']);

////part 2. 3 prototyping
//var talk = function(saywhat) {
//    console.log(saywhat);
//}
//
//var Dog = function() {
//    var name, breed;
//}
//
//var Cat = function() {
//    var name, breed;
//}
//
//Dog.prototype.speak = talk;
//Cat.prototype.speak = talk;
//
//firstDog = new Dog();
//firstDog.name = "Rover";
//firstDog.breed = "Doberman";
//firstDog.speak("Woof")
//
//firstCat = new Cat();
//firstCat.name = "Sniggles";
//firstCat.breed = "Manx";
//firstCat.speak("meowCat")

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