class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for(let i = 0; i < nums.length; i++){
            const currSum = target - nums[i];
            if(numsMap.has(currSum)){
                return [numsMap.get(currSum), i];
            }
            numsMap.set(nums[i], i);
        }
        return [];
    }
}
