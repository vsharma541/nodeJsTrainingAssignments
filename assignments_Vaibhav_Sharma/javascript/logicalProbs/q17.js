function arrayRotate(arr, k) {
    for(let i=0; i<k; i++) {
        arr.push(arr.shift());
    }
    return arr;
  }
  var arr = [1, 2, 3, 4, 5, 6];
  let num = Number(process.argv[2]);
 arrayRotate(arr, num);
  console.log(arr);