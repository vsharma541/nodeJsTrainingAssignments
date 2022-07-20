let arr = [];
for(let i=0; i<10; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log("Original array - ", arr);
arr.reverse()
console.log("Reversed array - ", arr);