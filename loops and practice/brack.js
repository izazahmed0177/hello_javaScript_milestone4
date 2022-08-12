for(var i=1;i<=20;i++){
    console.log(i);

    if(i>10){

        break;
    }
    
}



var rosatGiven=0;
while(rosatGiven<109){
    console.log('pise heee '+rosatGiven)

    console.log(rosatGiven)
    // rosatGiven=rosatGiven+1;

    // rosatGiven +=1;
    rosatGiven++;
}
// tostdata--------------------------
console.log('-------------------------')


var rosatGiven=0;
while(rosatGiven<10){
    console.log('pise heee '+rosatGiven)

    console.log(rosatGiven)
    // rosatGiven=rosatGiven+1;

    // rosatGiven +=1;
    rosatGiven++;
}



console.log('----------------------');

var numbers=[45,76,48,67,89,98,35,88,22,55,89,12,17,77];

for(var i=0;i<=numbers.length;i++){
    // console.log('odd nomber= '+i);

    var number=numbers[i];
    if(number>50){
        continue;
    }
    console.log(number);
}