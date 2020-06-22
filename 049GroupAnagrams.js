var groupAnagrams = function(strs) {
    if(strs.length === 0){
        return [];
    }
    const map = new Map();

    for(const str of strs){
        const chatacters = Array(26).fill(0);
        for(let i = 0; i < str.length; i++){
            const ascii = str.charCodeAt(i) - 97;
            chatacters[ascii]++;
        }
        const key = chatacters.join("");
        if(map.has(key)){
            //map.set(key,map.get(key).push(str))
            map.set(key,[...map.get(key),str]);
        } else {
            map.set(key,[str]);
        }
    }
    const result = [];
    for(const arr of map){
        result.push([arr[1]]);
    }
    return  result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


/*
1. 检查是否为空数组
2. 遍历所有字符串，并为每个字符串建立一个长度为26的数组，起始值为0。将字符串中每个字母出现的频率放到数组的对应位置里（利用ascii码）
3. 遍历数组，按照相同字母出现频率进行分组归类（map）
4.遍历map，将结果返回
 */
