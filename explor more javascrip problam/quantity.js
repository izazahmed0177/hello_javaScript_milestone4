//array of object
const shoppingCard=[
    {name:'shoe',price:2200,quantity:2},
    {name:'shirt',price:3000,quantity:5},
    {name:'pant',price:3700,quantity:4},
    {name:'belt',price:700,quantity:6},
    {name:'ti',price:300,quantity:7},
    {name:'clock',price:1500,quantity:3},
    ]
    
    function totalCost(products) {
        let sum=0;
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            console.log(product)

    
            const productTotal=product.price*product.quantity;
            // sum=sum+product.price;
            sum=sum+productTotal;
            
        }
        return sum;
    }
    
    const expense=totalCost(shoppingCard);
    console.log('Total expense today ',expense);