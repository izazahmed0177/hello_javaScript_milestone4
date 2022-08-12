// 1.show output 1-50
// if the number is divisible by 3 then instead of the number show 'foo'
// if the number is divisible by 5 then instead of the number show 'bar'
// if the number is divisible by 3 then instead of the number show 'foobar'


for(let i=1;i<=50;i++){
    // console.log(i);

    if (i%3===0 && i%5===0) {
        console.log('foo-bar-3-5 ',i);
    }else if(i%5===0){
        console.log('bar-5 ',i);

    }else if(i%3===0){
        console.log('foo-3 ',i);

    }
    else{
        console.log(i);
    }
    // console.log(i);
}