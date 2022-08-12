//string
const country='bangladesh'

//number
const age=52;

//boolean
const isIndependent=true;

//object
const student ={id: 121,class: 11, name: 'soliman'};

//array
const friend=[113,543,67,78,23,50,54]

//function
function add(num1,num2) {
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using Array.isArray
//bole podoti wrong
console.log(typeof friend);
//right
console.log(Array.isArray(friend));

console.log(Array.isArray(student));


console.log(typeof add);
//--------------------------

console.log(friend.includes(24));
console.log(friend.includes(23));

if (friend.indexOf(252) !== -1 ) {
    
}

//-----------



const newfriend=[13,14,17,18,20,5,15]

const allfriend=newfriend.concat(friend);
console.log(allfriend);