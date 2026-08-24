class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;
        let resSet = "";

        for(let r = 0; r < s.length; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            const size = r - l + 1;
            if(size > res){
                res = size;
                resSet = charSet;
            }
        }

        return res;
    }
}
