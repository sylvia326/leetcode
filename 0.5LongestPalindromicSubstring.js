var LongestPalindrom = function (s) {
    if(s.length < 2){
        return s;
    }
    let i = 0, start = 0, maxLength = 1;
    function expandAroundCenter(left,right) {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if (right - left + 1 > maxLength){
                maxLength = right - left + 1;
                start = left;
            }
            right--;
            left++;
        }
    }

    for(i; i < s.length; i++){
        expandAroundCenter(i-1,i+1);
        expandAroundCenter((i,i+1));
    }
    return s.substr(start, start + maxLength);
}

console.log(LongestPalindrom("babad"));


/*
1. 如果字符长度小于2，直接返回原字符串
2. 定义两个变量，一个start储存当前找到最大回文字符串的起始位置，maxlength储存最大回文字符的长度。终止位置是start + maxlength
3. 创建一个 helper function，判断左边右边是否越界，以及左边是否等于右边。如都满足，判断是否需要更新最大回文字符的长度。
   然后left--,right++, 继续判断，直到不满足其中任意一个条件。
4. 遍历字符串，每个位置调用helper function两遍，第一遍检查i-1,i+1， 第二遍检查i,i+1.（因为不是所有回文都有中心点---有中心:babad 没中心: cabbad）
*/
