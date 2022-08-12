const numbers=[45,65,23,98,19]


// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element)
    
// }

// for of loop
for (const number of numbers) {
    console.log(number);
    
}


const products=[
    {id:1,name:'iphone',price:19000},
    {id:2,name:'xiami Phone',price:19000},
    {id:3,name:'mac book',price:19000},
    {id:4,name:'lenovo laptop',price:19000},
    {id:5,name:'Dell laptop',price:19000},
    {id:6,name:'samsung phone',price:19000},
    {id:7,name:'nokia phone',price:19000},
    {id:8,name:'iphone 11pro',price:19000},
    {id:9,name:'walton phone',price:19000},
    {id:10,name:'HTC Phone',price:19000}
]



// for (const product of products) {
//     console.log(product);
// }

function matchProducts(products,search) {

    const matched=[];

    for (const product of products) {
        // console.log(product);
        // console.log(product.name.includes(search));

        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
            
        }
    }

    return matched;
}

const result=matchProducts(products,'phone')
console.log(result);
console.log('-----------------');

function compare(a, b) {
    if (a == b) {
     return true;
    } else {
     return false;
    }
   }
   const result1 = compare(15, "15");
   console.log(result1);
   console.log('------------');

   function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   const result3 = compare(25, 25);
   console.log(result3);

   let a='hi'
let b='there'
console.log(a+b)