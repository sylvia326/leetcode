var compress = function(chars) {
    let sum = 1;
    let result = [];
    for(let i = 0; i < chars.length-1; i++){
        if(chars[i] === chars[i+1]){
            sum++;
        } else {
            result += chars[i]+sum;
            sum = 1;
        }
    }
    result += chars[chars.length-1] + sum;
    result = result.split("");
    return result;
};

console.log(compress(["a","a","b","b","c","c","c"]));

// 为了防止越界，所以循环只能到length-1，为了把最后一个数的结果也输出，要在return result之前再输出一次最后一个字母的结果。
