var threeSum = function(nums) {
    let result = [];
   nums.sort(function (a,b) {
       return a-b;
   })
    for(let i = 0; i < nums.length -2; i++){
        if(i ===0 || nums[i]!== nums[i-1]){
            let start = i + 1, end = nums.length -1;
            while (start<end){
                if (nums[i] + nums[start] +nums[end]===0) {
                    result.push([nums[i],nums[start],nums[end]]);
                    start++;
                    end--;
                    while(nums[start]=== nums[start-1]){
                        start++;
                    }
                    while(nums[end]=== nums[start+1]){
                        start--;
                    }
                } else if (nums[i] + nums[start] +nums[end] < 0) {
                    start++;
                } else end--;
            }
        }
    }
    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));



/*
1. 将数组进行从小到大排序
2. 定义i，start，end的位置。如果i=0而且和i-1不同，继续循环。
3. 如果nums[i] + nums[start] +nums[end]之和为0，输出数组。如果大于0，end--。如果小于0，start++。
4.如果nums[start]和上一个start相等，start++； 如果nums[end]和上一个end相等，end--。

 */
