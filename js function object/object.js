//object declaration
var student={
    id:115,
    name:'solamin khan',
    class:9,
    mark:98
}

var mobile={
    brand:'samsung',
    price:19000,
    storage:'64 gb',
    camera:'7MP',
}

var myComputer={
    brand:'Dell',
    price:102000,
    color:'black',
    processor:'i8'
}

console.log(myComputer)
console.log('-----------------')
console.log(myComputer.price)
console.log(mobile.brand)
console.log('--------------')
//object ar key bar ko ra
console.log(Object.keys(mobile))
//object ar value bar kora
console.log(Object.values(mobile))
console.log('----------------')
//object ar man change
myComputer.processor='i 10'
console.log(myComputer)