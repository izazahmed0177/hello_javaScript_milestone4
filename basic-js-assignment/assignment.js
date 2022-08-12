
// start Problem:1  radianToDegree


function radianToDegree(radian) {

    //error handling
    if (typeof(radian) != 'number') {
        // console.log('Please give me a valid input')
        return 'Please give me a valid input';
    }else{
        let pi=Math.PI;
    let degree=radian*(180/pi);
    degree=degree.toFixed(2);
    degree=parseFloat(degree);
   

    return degree;
    
    }  
}

let radianValue=565;
const degree=radianToDegree(radianValue);
// console.log(degree);




// End Problem:1  radianToDegree
//--------------------------------------

// start Problem:2  isJavaScriptFile 

function  isJavaScriptFile(String) {
 
 //error handling
if (typeof(String) != 'string') {
    // console.log('Please give me a valid input')
    return 'Please give me a valid input';
} else {
   
    let fileString=String.endsWith('.js');
   
    return fileString;
}
   
}

let fileName='app.js';
const result=isJavaScriptFile(fileName);
// console.log(result);




// End Problem:2  isJavaScriptFile 
//----------------------------------------


// start Problem 3: oilPrice

function oilPrice(diesel,petrol,octane) {

//error handling
if (((diesel) < 0) ||((petrol )<0) ||((octane)<0) ) {
    // console.log('Please give me a valid input')
    return 'Please give me a valid input';
    
}else if( (typeof(diesel) != 'number' ) || (typeof(petrol) !="number") ||(typeof(octane) !='number')){
    // console.log('Please give me a valid input')
    return 'Please give me a valid input';

}else {

    let dieselPrice=diesel*114;
    let petrolPrice=petrol*130;
    let octanePrice=octane*135;

    let totalOilPrice=dieselPrice+petrolPrice+octanePrice;
    // console.log(totalOilPrice);

    return totalOilPrice;
    
}
   
}

let dieselQuantity=30;
let petrolQuantity=20;
let octaneQuantity=10;
let totalPrice=oilPrice(dieselQuantity,petrolQuantity,octaneQuantity);
    // console.log(totalPrice);




// End Problem 3: oilPrice
//-----------------------------------------


// start Problem 4: publicBusFare

function publicBusFare(totalPerson) {


    //error handling
if ((typeof(totalPerson) != 'number' ) || (Number.isInteger(totalPerson)==false)||(totalPerson<0)) {
    // console.log('Please give me a valid input');
    return 'Please give me a valid input';
    
} else {
   
     //bus solution
     let myBus=totalPerson/50;
     myBus=Math.floor(myBus);
     let myBusUser=myBus*50;
 
     //microbus solution
     let microBus=(totalPerson-myBusUser)/11;
     microBus=Math.floor(microBus);
     let microBusUser=microBus*11;
 
     //public bus solution
     let publicBusUser=totalPerson-(myBusUser+microBusUser);
    
 
     let publicBusTicketPrice=publicBusUser*250;
     
 
     return publicBusTicketPrice;
}
   
}

let picnicTotalPerson=237;
let totalPublicBusFare=publicBusFare(picnicTotalPerson);
// console.log(totalPublicBusFare);


// End Problem 4: publicBusFare
//-------------------------------------

// start Problem 5: isBestFriend

function isBestFriend(object1,object2) {

    //error handling
if ((typeof(object1) !='object') || (typeof(object2) !='object')||( Array.isArray(object1)==true)||( Array.isArray(object2)==true)) {
    // console.log('Please give me a valid input');

    return 'Please give me a valid input';
}else{
    if ((object1.name==object2.friend) && (object1.friend==object2.name) ) {
       
        return true;
    } else {
       
        return false;
    } 
}  
}

let object1={name:'doe',friend:'alex'}
let object2={name:'alex',friend:'doe'}
let myFriend=isBestFriend(object1,object2);
// console.log(myFriend);



//End Problem 5: isBestFriend

