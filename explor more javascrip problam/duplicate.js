const names=['abul','babul','cabul','dabul','ebul','babul','abul','kabul','gabul','cabul','abul','babul','abul','babul']

function removeDuplicate(names) {
    const unique=[];

    // for(let i=0;i<names.length; i++){
    //     const name=names[i];
    //     console.log(name);
    // }


    for(let i=0;i<names.length; i++){
        const name=names[i];
        // console.log(name);

        if (unique.includes(name)===false) {
            unique.push(name)
        }
    }
    return unique;
}


const uniqueNames=removeDuplicate(names);

console.log(uniqueNames)