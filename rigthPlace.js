function rigthPlace(string , char , string2){
let result = string.replace('_',char)
// if(result == string2){
//     console.log('Matched');
// }else{
//     console.log('Not Matched');
// }
let out= result === string2? 'Matched' : 'Not Matched'
console.log(out);
}
rigthPlace('Str_ng', 'I',

'Strong')