// chack 1
const mtstring='izaz ahmed emon';
 let isyouboy=true;
 let roll=45;
//  let abc='hgfg'

 console.log(typeof(mtstring));
 console.log(typeof(isyouboy));
 console.log(typeof(roll));
 console.log(typeof(abc));

 console.log('------------------------');
//  chack 2
 let num1=30;
 console.log(num1);
// variable value change
 num1=78
 console.log(num1);
 //--------

 const num2=67;
 console.log(num2);

 //const de a declare variable ar value change ko ra jai na
//  num2=88;
//  console.log(num2);

console.log('------------------------');
//chack 3

let number1=13;
let number2=4;

let sum=number1+number2;
let sub=number1-number2;
let multy=number1*number2;
let div=number1/number2;
let modulas=number1%number2;

console.log('sum',sum);
console.log(sub);
console.log(multy);
console.log(div);
console.log(modulas);

console.log('----------------------');

console.log();
//chack 4 & chack 6

let number3=20;
let number4=25;

if (number3 < number4) {
    console.log('number3 lass them number4 num3 < num4');
    
} else {
    console.log('number4 lass them number3 num4 < num3 ');  
}
//------
if (number3 > number4) {
    console.log('number3 big them number4 num3 > num4');
    
} else {
    console.log('number4 big them number3 num4 > num3 ');  
}
//-----------
if (number3 == number4) {
    console.log('number3 equle them number4 num3 == num4');
    
} else {
    console.log('number3 not equle them number4 num4 != num3 ');  
}
//-----------
if (number3 != number4) {
    console.log('number3 not equle them number4 num3 != num4');
    
} else {
    console.log('number3  equle them number4 num4 == num3 ');  
}

//---------------------
if (number3 <= number4) {
    console.log('number3 lass them equle number4 num3 <= num4');
    
} else {
    console.log('number4 lass them equle number3 num4 <= num3 ');  
}

//============
if (number3 >= number4) {
    console.log('number3 big them equle number4 num3 >= num4');
    
} else {
    console.log('number4 big them equle number3 num4 >= num3 ');  
}


console.log('---------------------');
//chack 5 & chack 4

const a = 3;
const b = -2;

console.log('a: ' ,a,'b: ',b)
console.log('a<b ',a<b);
console.log('a>b ',a>b);
console.log('a==b ',a==b);
console.log('a!=b ',a!=b);
console.log('a<=b ',a<=b);
console.log('a>=b ',a>=b);






console.log('---------------------');
console.log(a > 0 && b > 0);
console.log(a > 0 && b < 0);

console.log(a > 0 || b < 0);
console.log(a > 0 || b > 0);

console.log('---------------------');
console.log('---------while loop------------');
//case 7

let x=7;

while (x<=19) {
    console.log('odd number ',x);

    x +=2;
}
console.log('-------------')
//another way

let y=7;
while (y<=19) {
    // console.log('odd number ',y);

    if (y%2 !=0) {
        console.log('odd number ',y);
    }

    y ++;
}

console.log('--------------')
console.log('--------------')
//chack 8

console.log()

let myarray=[23,55,75,89,99,43,65,77,64,40,90,54,22]
console.log(myarray)
console.log('total value of array ',myarray.length);
//4th position change
myarray[3]=100;
console.log(myarray)

console.log('------add 2 value in array--------')
let myarray2=[3,4,7,9,6,10,15,2];
console.log(myarray2);
myarray2[2]=myarray2[2]+myarray2[3];
console.log(myarray2);

console.log('------ array pup shi--------')
let myarray3=[300,500,4,5000,6000,7000,8000,9000,7,9,6,10,15,200,400];

console.log(myarray3);
myarray3.pop();
console.log(myarray3);
myarray3.shift();
console.log(myarray3);
console.log('---slice----');

let part1=myarray3.slice(3,5);
console.log(part1);
console.log(myarray3);



console.log('----splice----');
let part2=myarray3.splice(3,2);
console.log('array is',part2);
console.log(myarray3);

console.log('----splice exta----');
let myarray4=[300,500,4,5000,6000,7000,8000,9000,7,9,6,10,15,200,400];
console.log(myarray4);

let part3=myarray4.splice(3,4,9999,88888,77777,4444,6666);
console.log('array is',part3);
console.log(myarray4);

//----------------
console.log('---------------------')
console.log('---------------------')
// chack 9 

let studentarray=[23,55,75,89,99,43,65,77,64,40,90,54,22]

for (let i = 0; i < studentarray.length; i++) {
    const element = studentarray[i];
    console.log(element);
    
}

for (let i = 0; i < studentarray.length; i++) {
    const element = studentarray[i];
    console.log('array value with index ',i,element);
    
}

console.log('-------for each using--------')
studentarray.forEach(element => {
    console.log('array value with index ',element);
});

//----------------
console.log('---------------------')
console.log('------- array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে --------------')
// chack 10 


let studentarray1=[23,101,55,75,89,99,43,65,97,88,81,77,64,40,90,54,502,22]



for (let i = 0; i < studentarray1.length; i++) {
   

    if (studentarray1[i]>80) {
        const element = studentarray1[i];
        console.log('array value with index ',i,element);
    }
    
}

//----------------
console.log('---------------------')
//----------------
console.log('---------------------')
//chack 11
function multythreeNumber(num1,num2,num3) {
   
    return num1*num2*num3;
    
}

const result =multythreeNumber(2,5,10);
console.log(result)

//----------------
console.log('---------------------')
//----------------
console.log('---------------------')
//chack 12

const shoping={shart:6,color:'block',size:'XL',price:2000}
console.log(typeof(shoping));
console.log(shoping);

shoping.price=3000;
console.log(shoping);
shoping['price']=4000;
console.log(shoping);

shoping.color='white';
console.log(shoping);




