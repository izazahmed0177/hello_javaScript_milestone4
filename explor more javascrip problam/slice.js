const friend=[13,43,67,78,23,50,54,76,87,98]
const partial=friend.slice(2,5);
console.log(partial)
console.log(friend)
console.log('----------------------')


const friend2=[13,43,67,78,23,50,54,76,87,98,100,103]
//array maja thaka value remove kor ta
const partial2=friend2.splice(2,5);
console.log(partial2)
console.log(friend2)

console.log('--------------------')
const friend3=[13,43,67,74,55,78,23,50,54,76,87,98,100,103]

console.log(friend3)


//array maja thaka value remove kor ta & value add ko ra o ji
const partial3=friend3.splice(2,5,555,6666,7777,8888);
console.log(partial3)
console.log(friend3)
