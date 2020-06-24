var maxSubArray = function(nums) {

    const memo = [];
    memo[0] = nums[0];

    for(let i = 1; i<nums.length; i++){
        memo[i] = Math.max((nums[i]+memo[i-1]),nums[i]);
    }
    let max = nums[0];
    for(let i = 0; i < memo.length; i++){
        max = Math.max(max, memo[i]);
    }
    return max;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


/*
1. 创建一个空数组
2. 对原数组进行遍历，每遍历一个数，要衡量是把之前的数加起来，还是抛弃之前的数字。如果之前的数字+现在的数字<现在的数字，
   那么抛弃之前的数字。如果大于现在的数字，则相加，并将结果添加到memo里
3. 遍历memo里的和，选出最大值
 */
