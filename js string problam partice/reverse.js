function reverseString(text) {

    // for(let i=0; i< text.length; i++){
    //     const element=text[i];
    //     console.log(element);
    // }


    // for(let i=text.length; i>=0 ; i--){
    //     const element=text[i];
    //     console.log(element);
    // }



    // for(let i=text.length-1; i>=0 ; i--){
    //     const element=text[i];
    //     console.log(element);
    // }



    let reversed='';
    for(let i=text.length-1; i>=0 ; i--){
        const element=text[i];
        // console.log(element);

        reversed=reversed + element;
        console.log(element,reversed)
    }
    return reversed;
}



function reversWords(str) {
    const word=str.split(' ')

    console.log(word);


    const result=[];
    for(let i=word.length-1; i>=0 ; i--){
        const element=word[i];
        // console.log(element);
        result.push(element);
 
    }
    console.log(result)
    const wordrevers=result.join(' ')
    return wordrevers;
}





const myString='I am a good boy';
const reversed= reverseString(myString);

console.log('reveres output ',reversed);
console.log('-------------------');



const reversedWord=reversWords(myString);
console.log('reveres word output: ',reversedWord);