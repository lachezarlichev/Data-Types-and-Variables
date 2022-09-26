function lastDigity(digity) {
  let stringDigity = digity.toString();
  let sum = "";
  let type = "";
  for (let i = 0; i < stringDigity.length; i++) {
    let current = stringDigity[i];
    sum = current;
  }
  switch (sum) {
    case "1":
      type = "one";
      break;
    case "2":
      type = "two";
      break;
    case "3":
      type = "tree";
      break;
    case "4":
      type = "four";
      break;
    case "5":
      type = "five";
      break;
    case "6":
      type = "six";
      break;
    case "7":
      type = "seven";
      break;
    case "8":
      type = "eigth";
      break;
    case "9":
      type = "nine";
      break;
    case "0":
      type = "zero";
      break;
  }
  console.log(type);
}
lastDigity(512)
