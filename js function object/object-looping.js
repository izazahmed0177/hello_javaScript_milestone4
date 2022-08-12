//array vs object

var shoppingItem=['book','mouse','pen','shoes'];
var friendAge=[23,26,21,20,27,22,25];
var friendAge={
    rahim:23,
    samad:26,
    karim:21,
    jamal:20,
    robi:27,
    kazi:22,
    ibrahim:25
}

var shoppingCard={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:26,
    shoes:2,
    bottle:3

}

const keys=Object.keys(shoppingCard);
console.log(keys);

console.log('---------------');

const values=Object.values(shoppingCard);
console.log(values);



console.log('---------------');
console.log('------impotent---------');

// inpotent

for (let i = 0; i<keys.length; i++) {
    // const element = array[index];

    // console.log(keys[i]);

    var propertyName=keys[i];
    var propertyValue=shoppingCard[propertyName];
    console.log(propertyName,propertyValue);
    
}
console.log('---------------');
console.log('---------------');


//easy way
//for in

for (const propertyName in shoppingCard) {
    const value=shoppingCard[propertyName];
    console.log(propertyName,value);



    // if (Object.hasOwnProperty.call(object, propertyName)) {
    //     const element = object[propertyName];
        
    // }


}