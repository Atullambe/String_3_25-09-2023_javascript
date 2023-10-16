const isPalindrome = (str) => {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
};
const testString1 = "racecar";
const testString2 = "hello";

console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`);  
console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`);  
