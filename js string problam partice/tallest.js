function maxInArray(numbers) {
    
    
    console.log("array inside the array ",numbers)

    // for (let i = 0; i < numbers.lenght; i++) {
    //     let index = i;
    //     let element = numbers[index];
    //     console.log(element);
    //     console.log('hhhh')

    // }

    let largest=numbers[0];

    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        console.log(element);
        // console.log('hhhh')

        if (element>largest) {
            largest=element;
        }
    }
return largest;
}

const heights = [
    167,
    190,
    120,
    165,
    137
];

const tallest = maxInArray(heights);
console.log('tallest person is ', tallest);


//write a function to get the lowest number in array
