function isEven(number ){

    const remainder=number%2;

    
if (remainder===0) {

    // console.log('number is even')
    return true;
}
else{
    // console.log('number is odd') 
    return false;
}

}
const mynumberiseven=isEven(300);
console.log(mynumberiseven);
// isEven(303);
// isEven(240);
// console.log(mynumberiseven);