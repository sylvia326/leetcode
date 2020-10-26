// var selec = function (arr) {
//   for(let i = 0; i < arr.length; i++){
//     let minNum = arr[i];
//     for (let j = i; j < arr.length; j++){
//       if (arr[j] < minNum){
//         minNum = arr[j];
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(selec([1,3,-1,5,4,-1,8]));

var selecasort = function (arr) {
  for(let end = arr.length - 1; end > 0; end--){
    let maxIndex = 0;//把最大对比项设置为arr[0]
    for(let start = 1; start <= end; start++){
      if(arr[maxIndex] <= arr[start]){
        maxIndex = start;//遍历数组的时候把更大数的index和更小数换位置，遍历结束后得到maxindex的位置
      }
    }
    let temp = arr[end];
    arr[end] = arr[maxIndex];
    arr[maxIndex] = temp;  //把最大数和末尾的位置调换
  }
  return arr;
}

console.log(selecasort([1,3,-1,5,4,-1,8]));

//思路： 内循环遍历数组，每次把最大的数放到数组的最后一位；外循环每次数组长度-1
