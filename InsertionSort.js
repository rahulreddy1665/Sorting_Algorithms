function InsertionSort (nums){
    // Time complexity of this sort will be o(n2) as it uses 2 loops
    // We will compare the current element with its previous and swap if its greater or lesser
    for(let i=1;i<nums.length;i++){
        let current = nums[i];
        let j = i-1;
        while((j > -1) && (current < nums[j])){
            nums[j+1] = nums[j];
            j--;
        }
            nums[j+1] = current;
    }
    return nums;
}

console.log(InsertionSort([3, 5, 7, 11, 13, 2, 9, 6]))

