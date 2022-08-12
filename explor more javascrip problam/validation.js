function add(num1,num2) {

    if (typeof num1 !=='number' || typeof num2 !=='number') {
        return 'please enter a number';
    }
    
    return num1+num2;
}

const result=add(12,34);
const result1=add(12,"23");
console.log(result);
console.log(result1);


const nayoks=['“Bangla Bhai”','”English Bhai”','”Korean Bhai ”','”Turkish Bhai ”']


// How will you loop through this array? const nayoks=[“Bangla Bhai”,”English Bhai”,”Korean Bhai ”,”Turkish Bhai ”] ?
for(const nayok of nayoks){
    console.log(nayok);
}

let x=5;
let y=5;
// Math.min

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
console.log(i,sum);
}