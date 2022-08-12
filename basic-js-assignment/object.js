const objwork={
    name:"emon arafat",
    id:123,
    address:'molai gate',
    isSingle:true,
    friends:['apu','raj','ibrahim','sobuj'],

    movies:[{name:'no.1',year:2021},{name:'king khan',year:2018}],

     act:function () {
        confirm.log('object ar function')
        
     },

    car:{
        brand:'tesla',
        price:500000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
            country:'USA'
        }

    }
}

console.log(objwork);
console.log(objwork.friends);
console.log(objwork.car);
console.log(objwork.act);
// objwork.act();
// objwork.act();
