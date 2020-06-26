var isAnagram = function(s, t){
    if(s.length !== t.length){
        return false;
    }
    const map = new Map();
    for(let i = 0; i<s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i],1);
        } else{
            map.set(s[i],map.get(s[i])+1);
        } if(map.has(t[i])){
            map.set(t[i],map.get(t[i])-1);
        } else {
            map.set(t[i],-1);
        }
    }
    for(const letter of map ){
        if(letter[1] !== 0){
            return false;
        }
    }
    return true;
}


console.log(isAnagram(s = "anagram", t = "nagaram"));

/*
1. 如果两个字符串长度不相等，返回false。
2. 建立一个新的map，用来储存每个字符出现的次数。
3. 只需要遍历任何一个字符串，比如s。如果s没有的字符，在map中s[i]的value设置为1，如果已有就value+1。
   然后再检测t中的字符有没有在s中出现过，出现过就减1，没出现过就等于-1。
4. 最后如果map中的有任何一个值为非0都是false
 */
