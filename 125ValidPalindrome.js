var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g,"");
    if(s.length === 1){
        return true;
    }
    let left = 0, right = s.length-1;
    while(left<right){
        if(s[left] === s[right]){
            left++;
            right--;
        } else{
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
