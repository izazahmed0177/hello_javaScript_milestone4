// let product=[
//     {name:'phon',price:77655,},
//     {name:'phon22',price:77655,}
// ]

// product[0];

// product[1];


// const products=[15,56,87]

const products={
    '0':15,
    '1':56,
    '2':87
}


///--------argumantes---
function add(num1,num2) {
    console.log(num1,num2);
    //array lick object
    console.log(arguments)
    console.log(arguments[3])
    
}
// add(12,13);
add(12,13,556,78,767);