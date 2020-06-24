var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length -1;

    let direction = "right";
    let result = [];

    while(left <= right && top <= bottom){
        if(direction === "right"){
            for(let i = left; i <= right; i++ ){
                result.push(matrix[top][i]);
            }
            top++;
            direction = "down";
        }

        else if (direction === "down"){
            for(let i = top; i <= bottom; i++){
                result.push(matrix[i][right]);
            }
            right--;
            direction = "left";
        }

        else if (direction === "left"){
            for(let i = right; i >= left; i--){
                result.push(matrix[bottom][i]);

            }
            bottom--;
            direction = "top"
        }

        else if (direction === "top"){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left]);
            }
            left++;
            direction = "right";
        }
    }
    return result;
};

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]));

/*
1. 如果数组为空，返回空数组
2. 定义四个边界以及前进方向。
3. 当左边界小于右边界，且上边界小于下边界的时候，执行while循环，
   按照依次右(top少一行)、下（right少一行）、左（bottom少一行）、上（left少一行）的顺序，依次将字符添加到result
4. while循环结束后，返回结果
 */
