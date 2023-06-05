function Quicksort(nums) {
    // Time complexity of this sort will be o(n*logn) because it uses divide and conquer method as it partioned the array into 2 parts
   //  Using the pivot element If the current element is greater it will be psuhed to right or else to the left 
    if (nums.length < 2){
        return nums;
     }
  let leftArray = [];
  let rightArray = [];
  let pivot = nums[nums.length - 1]
  
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] < pivot) {
      leftArray.push(nums[i]);
    } else {
      rightArray.push(nums[i]);
    }
  }

  return [...Quicksort(leftArray), pivot, ...Quicksort(rightArray)];
}

console.log(Quicksort([64,12,22,11,25,69]));
