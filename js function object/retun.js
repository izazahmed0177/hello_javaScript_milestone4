function add(num1,num2) {
    console.log(num1,num2)
    var sum = num1+num2;
    // console.log(sum)
return sum;
}
// add(20,30);
var total=add(50,60);
console.log('total',total);
console.log('----------------------')

function bringSingara(money) {
    var singaraPrice=10;
    var quantity=money/singaraPrice;
    return quantity;
    
}
var mytaka=300;
var singaras=bringSingara(mytaka);
console.log('eiting singara',singaras);