function plus(a,b) {
    return (
        console.log(a+b),
            console.log(this),
            console.log(arguments)
    )
};
plus(2,2);

//var plus = function(a, b) {
//    return console.log(a+b);
//}(2,2);

//function plus(a, b) {
//    var sum = a+b;
//    return sum;
//}

//console.log(plus(2,2));