class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = {};
        for(const str of strs){
            const key = str.split("").sort().join("");
            if(!anagramsMap[key]){
                anagramsMap[key] = [];
            }
            anagramsMap[key].push(str);
        }
        return Object.values(anagramsMap);
    }
}
