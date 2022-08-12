 //stap 1
 // function getSum(numbers) {
//     console.log(numbers);
// }

// const myNumbers=[12,23,16,55,48,34,75,90,99];

// getSum(myNumbers);


//stap 2

// function getSumOfAnArray(numbers) {
//     // console.log(numbers);
//     for(let i=0; i< numbers.length; i++){
//         let index=i;
//         let element=numbers[index]
//         // console.log(index);
//         console.log(index,element);
//     }
// }

// const myNumbers=[12,23,16,55,48,34,75,90,99];

// getSumOfAnArray(myNumbers);


//--------------------------
//stap 3 sum array value


// function getSumOfAnArray(numbers) {
//     // console.log(numbers);
//     let sum=0;
//     for(let i=0; i< numbers.length; i++){
//         let index=i;
//         let element=numbers[index]
//         sum=sum+element;
//         // console.log(index);
//         console.log(index,element,sum);
//     }

//     return sum;
// }

// const myNumbers=[12,23,16,55,48,34,75,90,99];

//       // getSumOfAnArray(myNumbers);
// let mysum=getSumOfAnArray(myNumbers);
// console.log('----------------')
// console.log(mysum);


console.log('----------------')
console.log('----------------')

//get odd number in array


function getOddNumbersOfAnArrat(numbers) {

    const oddnumber=[];
    for (let i = 0;  i <numbers. length; i ++) {
        // console.log(i);

        let index=i;
        let element=numbers[index]

        // even number
        // if (element%2===0) {
        //     console.log(index,element);
        // }

        if (element%2!==0) {
            console.log(index,element);
            oddnumber.push(element);
        }   
    }
    return oddnumber;
    
}


//----------------------
//odd number sum

function getOddNumSumOfAnArray(numbers) {
    // console.log(numbers);
    let sum=0;
    for(let i=0; i< numbers.length; i++){
        let index=i;
        let element=numbers[index]
        sum=sum+element;
        // console.log(index);
        console.log(index,element,sum);
    }

    return sum;
}





//-----------------



const myNumbers=[12,23,16,55,48,34,75,90,99,56,77,39,13];
console.log('total array ',myNumbers)

console.log('----------------')
// getOddNumbersOfAnArrat(myNumbers);
const oddnumbers= getOddNumbersOfAnArrat(myNumbers);
console.log('----------------')
console.log(oddnumbers)
console.log('----------------')
const oddNumberSum=getOddNumSumOfAnArray(oddnumbers);
console.log('odd number sum',oddNumberSum);