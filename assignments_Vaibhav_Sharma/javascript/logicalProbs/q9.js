function arraySpecialConcat(arr1, arr2) {
    let newArr = [];
    for(let i=0; i<arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log(arraySpecialConcat(arr1, arr2));