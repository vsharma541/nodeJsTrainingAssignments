console.log("Enter the string > ");
process.stdin.setEncoding('utf-8');

let inputData = '';
process.stdin.on('data', (inputVal) => {
    inputData += inputVal;
    process.exit();
})
process.on('exit', () => {
    inputData = inputData.trim();
    main();
})

function main() {
    const str = translatePigLatin(inputData);
    console.log(str);
}

function translatePigLatin(tempStr) {
    let strArray = tempStr.split(' ');
    let newStr = "";
    for(let str of strArray) {
        var length = str.length;
        var tab = [];
        for(var i=0; i<length; i++){
          var first = str.charAt(i);
          if(first === "a" || first === "e" || first === "i" || first === "o" || first === "u" || first === "y"){
            if(i === 0){
              str = str + "way";
            }
            else{
              str = str.substring(i) + tab.join("") + "ay";
            }
            break;
          }
          else{
            tab.push(first);
          }
        }
        newStr += str + " ";
    }
    return newStr;
  }
