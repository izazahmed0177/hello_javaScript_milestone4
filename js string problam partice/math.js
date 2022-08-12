const result=Math.pow(3,8);
console.log(result);


const num1=25;
const num2=45;

// const gap= num1-num2;
//sudo mat ro positive number ar jo no
const gap=Math.abs(num1-num2) ;
console.log(gap)

console.log(gap)
    
if (gap<5) {

    console.log('you guys can be friend')
    
} else {
    console.log('you guys stay apart')
    
}

//-------------------
//
//----------

const number=2.4598;
const number2=2.52598;
const fullNumder=Math.round(number);
const fullNumder2=Math.round(number2);

console.log(fullNumder);
console.log(fullNumder2);
console.log('-------------------');

const number3=2.0008;
const number4=2.52598;

const result2=Math.ceil(number3)
const result3=Math.ceil(4.0000000001);

const result4=Math.floor(number4);
const result5=Math.floor(4.9999999);
console.log('-------rttt---------')

console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

console.log('-----------------')
//-------------------------
//random

console.log(Math.random());
const random =Math.random()*100;
const random1 =Math.round(Math.random()*100);
console.log(random);
console.log(random1);
console.log('--------random 6---------')

for(let i=0;i<20;i++){
    const random2 =Math.round(Math.random()*6);
    console.log('soxka number',random2)
}