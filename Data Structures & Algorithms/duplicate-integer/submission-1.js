class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sets =new Set();

        for(let num of nums){
            if(sets.has(num)){
                return true;
            }
            sets.add(num);

        }
        return false;
        // for(let i=0;i<nums.length;i++){
        //     for(let j=i+1;j<nums.length;j++){
        //         if(nums[i]===nums[j]){
        //             return true;
        //         }
        //     }
        // }
        // return false;
    }
}
