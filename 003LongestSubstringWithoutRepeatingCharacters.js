var LengthOfLongestSubstring = function (s) {
    const set = new Set();
    let i = 0, j = 0, maxLength = 0;
    if(s.length === 0){
        return 0;
    }
    for (i; i < s.length; i++){
        if(!set.has(s[i])){
            set.add(s[i]);
            i++;
            maxLength = Math.max(maxLength, set.size);
        } else {
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            } set.add(s[i]);
        }
    }
    return maxLength;
}

console.log(LengthOfLongestSubstring("abcabcbb"));



/*
Slding window
1. 创建一个set
2. 两个指针（第一个，i 随着for循环遍历字符串； 第二个，j 指向字符串的开头
3. 如果set里没有s[i]，说明目前为止没有重复的字符，把s[i]添加到set里，然后更新最大不重复字符的数量
4. 如果set里有s[i], 则从set里开始删除s[j]，并且j++，再检查set里是否有s[i]，重复直到set里没有s[i]为止
5. 重复步骤3和4，直到遍历完整个字符串
*/
