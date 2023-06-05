function MergeSort(nums){
    // Time complexity for merge sort will be o(nlogn)
    // Divide and conquer method
    let mid = Math.floor(nums.length/2);
    let leftArray = []
    if(nums.length < 2){
        return nums
    } 
    leftArray = nums.splice(0,mid)
   return Merge(MergeSort(leftArray),MergeSort(nums))
}

function Merge(leftArray,rightArray){
    let array = []
    while (leftArray.length && rightArray.length){
        if(leftArray[0]<rightArray[0]){
            array.push(leftArray.shift())
        }else{
            array.push(rightArray.shift())
        }
    }
    return [...array,...leftArray,...rightArray]
}

console.log(MergeSort([5,2,4,3,1]))