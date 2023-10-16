const countVowels = (str) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};
const testString = "Hello, World!";
const vowelCount = countVowels(testString);
console.log("Number of vowels:", vowelCount); 
