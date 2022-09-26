function reverseString(str) {
    let name = str.toString()
    let digityOFString = str.length
    let numberOfdigity = Number(digityOFString)
     let current = ''
   
        for(let y=0;y < name.length;y++ ){
            current =  str[y] + current 
        
        }console.log(current);
    }

  
  reverseString("hello");