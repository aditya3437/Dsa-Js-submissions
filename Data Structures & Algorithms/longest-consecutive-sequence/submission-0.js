class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sets=new Set(nums);
        let longStreak = 0;
        for(const num of sets ){
            if(!sets.has(num-1)){
                let currentNum = num;
                let currentStreak = 1;

                while(sets.has(currentNum+1)){
                  currentNum++;
                  currentStreak++;
                }
                longStreak = Math.max(longStreak,currentStreak);

            }
           
        }

        return longStreak;

    }
}
