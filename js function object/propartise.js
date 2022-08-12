var shoppingCard={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:26
}
console.log(shoppingCard);

console.log('------------------');
//when you know the specific property name,use dot notation to get the property value
var panCount=shoppingCard.pen;
console.log(panCount)
console.log('----------------')
//alternative system
//when you know the specific property name,use dot notation to get the property value
var panCount2=shoppingCard['pen'];
console.log(panCount2)
console.log('---------------')

var porpertyName='mouse';
var propertyValue2=shoppingCard[porpertyName]
console.log(porpertyName,propertyValue2);

console.log('---------------------')


// impotent
var properties=Object.keys(shoppingCard);
console.log(properties)

console.log('---------------------')
for(var i=0;i<properties.length;i++){
    var number=properties[i];
    console.log(number);
}

//impotent

console.log('---------------------')
console.log('---------------------')

var propertyValues=Object.values(shoppingCard)
console.log(propertyValues)
console.log('---------------------')
//set value
console.log('---------set value------------')
console.log(shoppingCard)
shoppingCard.mouse=14;
console.log(shoppingCard)
console.log('---------------------')
shoppingCard['mouse']=30;
console.log(shoppingCard)
console.log('---------------------')
var porpertyName1='pen';

shoppingCard[porpertyName1]=40;
console.log(shoppingCard);
