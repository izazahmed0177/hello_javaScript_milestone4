function bestFriend(friend) {
    // console.log(friend)

    let largestname=friend[0];

    for (let i = 0; i < friend.length; i++) {

        let index=i;
        let element = friend[index];
        // console.log(element);
        
        if (element.length>largestname.length) {
            largestname=element;
        }
    }
    console.log(typeof(largestname));
    console.log('------')

// console.log(largestname);
return(largestname)
}




const friendnames=['abul hasan','babulla','cabul','dabul','izaz ahmed emon','ebul','ibrahim','gabul hassan']


const friends=bestFriend(friendnames);
console.log(friends);