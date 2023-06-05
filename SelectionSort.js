function SelectionSort(nums) {
    // Time complexity will be o(n2) as it uses 2 for loops
  for (let i = 0; i < nums.length - 1; i++) {
    let small = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[small]) {
        small = j;
      }
    }
    let temp;
    temp = nums[small];
    nums[small] = nums[i];
    nums[i] = temp;
  }

  return nums;
}


console.log(SelectionSort([69,10,21,432,2131,23,333333]))
