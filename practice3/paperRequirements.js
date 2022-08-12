function paperRequirements(firstbook,secondbook,thirdbook) {
    let firstbookpage=100*firstbook;
    let secondbookpage=200*secondbook;
    let thirdbookpage=300*thirdbook;

    let totelpage=firstbookpage+secondbookpage+thirdbookpage;

    return totelpage;
}


let firstbookorder=3;
let secondbookorder=4;
let thirdbookorder=2;

let totalbookpage=paperRequirements(firstbookorder,secondbookorder,thirdbookorder);
console.log('paper Requirements :',totalbookpage);