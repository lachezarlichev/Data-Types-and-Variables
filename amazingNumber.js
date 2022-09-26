function amazingNumber(number){
    let sum = 0
    let isamazing = false
    number = number + ""
    
    for(let i = 0; i<number.length;i++){
        let newNUmber = Number(number[i])
        sum = newNUmber +sum
    
    } let  sumtext = sum.toString()
    for(let i = 0;i<sumtext.length;i++){
        let digity = sumtext[i]
        if(digity == '9'){
            isamazing = true
            
           break;
        }
    }
    if(isamazing){
        console.log(`${number} Amazing? True`);
    }else{
        console.log(`${number} Amazing? False`)
    }
}
amazingNumber(999)