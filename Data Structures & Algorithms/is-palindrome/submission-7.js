class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let l = 0;
        let r = cleanStr.length-1;
        while(l < r){
            if(cleanStr[l] !== cleanStr[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
