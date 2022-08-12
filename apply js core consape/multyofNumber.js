//1*2*3*4*5......

function multiplicationofNumber(number) {

    let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
    console.log(i, result);
  }
  return result;
    
}

let myMultyNumber=multiplicationofNumber(5);
console.log(myMultyNumber);


console.log('--------------------------');




function multiplicationofNumberrevers(number) {

    let result = number;
  for (let i = number-1; i >= 1; i--) {
    result = result * i;
    console.log(i, result);
  }
  return result;
    
}

let myMultyNumberrevers=multiplicationofNumberrevers(5);
console.log(myMultyNumberrevers);