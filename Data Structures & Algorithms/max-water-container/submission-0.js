class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start=0;
        let end=heights.length-1;
        let maxAreas=0;
        while(start < end){
           let area =  Math.min(heights[start],heights[end]) * (end-start);
            maxAreas = Math.max(maxAreas,area);

            if(heights[start] < heights[end]){
                start++;
            }
            else{
                end--;
            }
        }
        return maxAreas;
    }
}
