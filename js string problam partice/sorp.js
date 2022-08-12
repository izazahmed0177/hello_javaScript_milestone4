let fast=5;
let second=7; 
console.log(fast,second);
//this is wrong approach
// fast=second;
// second=fast;

//approach 1

// const temp=fast;
// fast=second;
// second=temp;

//-------------
//approach 2 destructuring
[fast,second]=[second,fast];



console.log(fast,second);