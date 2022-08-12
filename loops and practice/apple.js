var moneyGiven=1000;
var applePrice=400;
var orencePrice=300;

var totalPrice=applePrice+orencePrice;
console.log("apple & orange cost "+totalPrice);
var giveBack=moneyGiven-totalPrice;
console.log("money return "+giveBack);



var i = 0;
for (i=0; i<5; i++){};
console.log(i);

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
    if(marks[i] >=15){
        continue;
    }
    console.log(marks[i]);
};


// var i = 5;
// for (; i < 5; i++) {
//   console.log(i);
// }


// var i = 5;
// for (i < 5; i++) {
//   console.log(i);
// }

