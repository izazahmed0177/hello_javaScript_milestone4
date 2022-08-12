//array of object
const shoppingCard=[
{name:'shoe',price:2200},
{name:'shirt',price:3000},
{name:'pant',price:3700},
{name:'belt',price:700},
{name:'ti',price:300},
{name:'clock',price:1500},
]

function totalCost(products) {
    let sum=0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(product)

        sum=sum+product.price;
        
    }
    return sum;
}

const expense=totalCost(shoppingCard);
console.log('Total expense today ',expense);