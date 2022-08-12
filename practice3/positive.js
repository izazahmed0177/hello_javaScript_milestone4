
function positiveNumber(numbers) {

    console.log(numbers);
    console.log('-----------------');

    const positiveNumberArray=[];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element)

        if (element>=0) {
            // console.log(element);
            positiveNumberArray.push(element);
        }else{
            break;
        }
        


    }

    // console.log(positiveNumberArray);
    return positiveNumberArray;
}



let myarray=[23,55,75,89,0,99,43,65,-8,77,64,-45,40,-75,90,54,22]

let myPositiveNumber=positiveNumber(myarray);

console.log('my positive number ',myPositiveNumber);