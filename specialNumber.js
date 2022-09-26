function specialNumber(num) {
  num = num.toString();
  let redica = 0;
  let sum = 0;
  let type = "";
  for (let y = 1; y <= num; y++) {
    redica = y;
    redica = redica.toString();
    sum = 0;
    for (let i = 0; i < redica.length; i++) {
      let newNum = Number(redica[i]);
      sum = newNum + sum;
      if (sum != 5 && sum != 7 && sum != 11) {
        type = "False";
      } else {
        type = "True";
      }
    }
    console.log(`${redica} -> ${type}`);
  }
}
specialNumber(15);
