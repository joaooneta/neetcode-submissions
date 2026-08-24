class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let charSet = new Set();
        let resSet = charSet;
        let maxLength = 0;

        for(let right = 0; right < s.length; right++){
            while(charSet.has(s[right])){
                charSet.delete(s[left]);
                left++;
            }

            charSet.add(s[right]);
            const size = right - left + 1;

            if(size > maxLength){
                resSet = charSet;
                maxLength = size;
            }
        }

        return maxLength;
    }
}
