//phone array
// array ar moda object value

const phones=[
    //object
    {name:'samsung',camera:12,storage:'32gb',price:36000,color:'silver'},
    {name:'Walton',camera:10,storage:'32gb',price:32000,color:'silver'},
    {name:'iphone',camera:16,storage:'114gb',price:92000,color:'silver'},
    {name:'Xaomi',camera:12,storage:'64gb',price:52000,color:'silver'},
    {name:'Oppo',camera:12,storage:'32gb',price:20000,color:'silver'},
    {name:'Nokia',camera:12,storage:'32gb',price:44000,color:'silver'},
    {name:'HTC',camera:14,storage:'64gb',price:62000,color:'silver'},
];

function cheapestPhone(phones) {


    let cheapest=phones[0];
    for (let index = 0; index < phones.length; index++) {
        const phone = phones[index];
        // console.log(phone);
        if (phone.price<cheapest.price) {
            cheapest=phone;
        }     
    }
    return cheapest;
}

const mySelection=cheapestPhone(phones);
console.log(mySelection);


//higest camara work