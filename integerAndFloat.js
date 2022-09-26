function integral(firstNum , secondNum , thirdNum){
    let type = ''
    let sum = firstNum + secondNum + thirdNum
    let sum2 = Math.floor(firstNum + secondNum + thirdNum)
    if(sum == sum2){
        type = 'Integer'
    }else{
        type = 'Float'
    }
    console.log(`${sum} - ${type}`);
}
integral(9, 100, 1.1)