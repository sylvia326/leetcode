// var sort = function (arr) {
//   for(let i = 0; i < arr.length; i++){
//     let swaped = false;
//     for(let j = 0; j < arr.length - i; j++){
//       if (arr[j] > arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         swaped = true
//       }
//     }
//     if (!swaped){
//       break;
//     }
//   }
//   return arr;
// }


var bubble = function (arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    let end = 1;
    for (let i = 0; i <= j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        end = i;
      }
    }
    j = end;
  }
  return arr;
}

console.log(bubble([2, 1, 3, 4, 5]));
