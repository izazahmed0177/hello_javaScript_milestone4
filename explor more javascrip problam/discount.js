//1. if ticket number is lass then 100,per ticket price:100
//2.1-100 price 100 & 101-200 price 90

// 3.more 200
//1st 100=.>100 101-200->90 200+->70


function ticketPrice(ticketQuantity) {
    const first100Rate=100;
    const second100Rate=90;
    const restTicketRate=70;
    if (ticketQuantity<=100) {
        const price=ticketQuantity*first100Rate;
        return price;
        
    } else if(ticketQuantity<=200){
        const first100Price=100*first100Rate;
        const restTicketQuantity=ticketQuantity-100;
        const restTicketPrice=restTicketQuantity*second100Rate;
        const totalPrice=first100Price+restTicketPrice;


        return totalPrice;
        
    }else{
        const first100Price=100*first100Rate;
        const second100Price=100*second100Rate;

        const restTicketQuantity=ticketQuantity-200;
        const restTicketPrice=restTicketQuantity*restTicketRate;
        const totalPrice=first100Price+second100Price+restTicketPrice;


        return totalPrice;
    }
    
}

const price=ticketPrice(201);
console.log('price',price);