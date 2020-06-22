var isValid = function(s) {
   const map = new Map();
    map.set("(",")");
    map.set("[","]");
    map.set("{","}");

    const stack = [];
    for(let i = 0; i < s.length; i++){
        if (map.has(s[i])){
            stack.push(map.get(s[i]));
        } else {
           if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }
    if(stack.length !== 0){
        return false;
    } return  true;
}

console.log(isValid("{[]}"))


/*
1. 创建一个map，把所有的括号配对放进去
2. 创建一个stack，for循环遍历字符，如果map里有key，就是左括号，从map里取得相应的右括号push进stack。
   否则就是右括号，把stack里的第一个值pop出来，看是否等于当前字符，如果不相等，返回false。
3. 循环结束后如果stack不为空，则返回false。(eg. "{[]") 否则返回true。
 */
