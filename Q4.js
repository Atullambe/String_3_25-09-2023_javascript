const capitalizeFirstLetterOfWords = (sentence) => {
    let result = '';
    let capitalizeNext = true;
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === ' ') {
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                result += char.toUpperCase();
                capitalizeNext = false;
            } else {
                result += char.toLowerCase();
            }
        }
    }
    return result;
};

const testSentence = "this is a test sentence";
const capitalizedSentence = capitalizeFirstLetterOfWords(testSentence);
console.log("Original sentence:", testSentence);
console.log("Capitalized sentence:", capitalizedSentence);
