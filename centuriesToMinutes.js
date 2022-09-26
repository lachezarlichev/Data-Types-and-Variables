function convert(centririum){
    let years = centririum * 100
    let days = Math.trunc(years * 365.2422)
    let hours = 24 * days
    let minutes = hours * 60
    console.log(`${centririum} centuries = ${years} years = ${days
    } days = ${hours} hours = ${minutes} minutes`);
}

convert(5)