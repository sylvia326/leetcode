// 将数组重新排序，所有负数在前面，所有正数在后面。（不能新开数组）


var moveNagative = function (arr) {
    let j = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]<0){
            if(arr[i]!==arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
            j++;
        }
    }
}

console.log(moveNagative([-1,-2,3,-4,5,7,-11]));


/*
1. 创建j，i两个指针
2. 如果arr[i]是负数，i和j指向位置相等,i++,j++；
3. 如果arr[i]是正数，j不变，i++;（j永远指向第一个正数，并且从遇到第一个正数开始，i永远比j靠后）
4. 如果arr[i]是负数，i,j位置不相等，arr[i]和arr[j]互换。
 */
