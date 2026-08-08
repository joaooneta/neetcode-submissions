class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = [];
        for(const s of strs){
            const key = s.split("").sort().join("");
            if(!anagrams[key]){
                anagrams[key] = [];
            }
            anagrams[key].push(s);
        }
        return Object.values(anagrams);
    }
}
