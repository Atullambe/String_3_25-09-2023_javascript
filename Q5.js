const removeSpaces = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }

    return result;
};

const testString = "This is a test string";
const stringWithoutSpaces = removeSpaces(testString);
console.log("Original string:", testString);
console.log("String without spaces:", stringWithoutSpaces);
