function snapCrackle(maxValue){
    let stg = ""
    let i;
    for(i = 1; i <= maxValue; i++){
        if (maxValue % 2 !==0 ){
            stg+= "Snap, "}
        if (maxValue % 5 === 0);{
            stg+= "Crackle, " } 
        if((maxValue % 2 !== 0)&&(maxValue % 5 === 0)){
            stg += "SnapCrackle, "} 
        if ((maxValue % 2 === 0) || (maxValue % 5 !== 0)){
            stg += (maxValue + ",")} 
    }
}

console.log(snapCrackle(20))