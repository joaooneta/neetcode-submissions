class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numsMap = new Map();
        for(const n of nums){
            numsMap.set(n, (numsMap.get(n) || 0) + 1);

            if(numsMap.get(n) > Math.floor(nums.length/2)) return n;
        }
    }
}
