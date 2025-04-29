function reverseVowels(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let i = 0;
    let j = s.length - 1;
    let stringArray = s.split('');
    while (i < j) {
        while (i < j && !vowels.includes(stringArray[i])) {
            i++;
        }
        while (i < j && !vowels.includes(stringArray[j])) {
            j--;
        }
        [stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]];
        i++;
        j--;
    }
    return stringArray.join('');
}

console.log(reverseVowels("hello")); // Output: "holle"