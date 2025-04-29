function twoSum(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]