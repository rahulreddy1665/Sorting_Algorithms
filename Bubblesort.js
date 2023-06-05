function BubbleSort (nums) {
    // Compare first element with second element if its greater swap it using temp variable
    // TIme complexity of buble sort will be o(n2) becuase it uses two for looops
    for(let i=0 ; i< nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let temp;
            if(nums[i] > nums[j]){
                temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return nums;
}


// using map approach 
var sortColors = function(nums) {
    nums.map(e1 => nums.map((e2,i)=>{
        if(nums[i] > nums[i+1]){
            [nums[i],nums[i+1]] = [nums[i+1],nums[i]]
        }
    }))
    return nums;
 };
console.log(BubbleSort([5,2,4,3,1]))