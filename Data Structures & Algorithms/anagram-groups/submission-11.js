class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGroups = {};
        for(const str of strs){
            const key = str.split("").sort().join("");
            if(!anagramGroups[key]){
                anagramGroups[key] = [];
            }
            anagramGroups[key].push(str);
        }
        return Object.values(anagramGroups);
    }
}
