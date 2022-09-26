function compare(first,second,last){
    let result = 0
    if(first> second && second> last && first>last){
result = `${first}
${second}
${last}`
    }else if(first>second && last > second && first > last){
        result = `${first}
${last}
${second}`
    }
    else if(second> first && first > last && second > last){
        result = `${second}
${first}
${last}`
    }else if(second> first && last > first && second > last){
        result = `${second}
${last}
${first}`
    }else if(last > first && first> second && last > second){
        result = `${last}
${first}
${second}`
    }else if(last > first && second> first && last > second){
        result = `${last}
${second}
${first}`
    }
    console.log(result);
}
compare(0,0,2)