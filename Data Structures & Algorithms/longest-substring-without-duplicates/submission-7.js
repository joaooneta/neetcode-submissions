class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        let charSet = new Set();

        for(let right = 0; right < s.length; right++){
            while(charSet.has(s[right])){
                charSet.delete(s[left]);
                left++;
            }

            charSet.add(s[right]);
            const size = right - left + 1;
            if(size > longest){
                longest = size;
            }
        }

        return longest;
    }
}
