class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAreas=0;
        let n=heights.length;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                let area=Math.min(heights[i],heights[j]) * ( j-i);
                maxAreas=Math.max(maxAreas,area);
                
            }
        }
        return maxAreas;
        //optimal solutions
        // let start=0;
        // let end=heights.length-1;
        // let maxAreas=0;
        // while(start < end){
        //     let area =  Math.min(heights[start],heights[end]) * (end-start);
        //     maxAreas = Math.max(maxAreas,area);

        //     if(heights[start] < heights[end]){
        //         start++;
        //     }
        //     else{
        //         end--;
        //     }
        // }
        // return maxAreas;
    }
}
