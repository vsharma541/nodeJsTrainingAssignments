function arrayConcat(arr1, arr2) {
    let newArr = arr1;
    for(let temp of arr2) {
        newArr.push(temp);
    }
    return newArr;
}
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log(arrayConcat(arr1, arr2));