// 1.chair -->3 cft
//2.table -->10 cft
//3.bed -->50 cft

//vary:quantity


function woodCalculator(chairQuantity,tableQuantity,bedQuantity) {
    
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const chairWood=chairQuantity*perChairWood;
    const tableWood=tableQuantity*perTableWood;
    const bedWood=bedQuantity*perBedWood;

    // console.log(chairQuantity,tableQuantity,bedQuantity);

    const totalWood1=chairWood+tableWood+bedWood;

    return totalWood1;
}
const totalWood=woodCalculator(10,3,1);
console.log('total wood required',totalWood);