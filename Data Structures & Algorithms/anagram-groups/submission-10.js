class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGroups = {};
        for(const str of strs){
            const anagram = str.split("").sort().join("");
            if(!anagramGroups[anagram]){
                anagramGroups[anagram] = [];
            }
            anagramGroups[anagram].push(str);
        }
        return Object.values(anagramGroups);
    }
}
