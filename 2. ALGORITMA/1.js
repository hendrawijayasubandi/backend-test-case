function reverseAlphabet(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    const result = str.replace(/[A-Z]/g, char => reversedAlphabet[alphabet.indexOf(char)]);
    return result;
}

const inputString = "NEGIE1";
const reversedString = reverseAlphabet(inputString);
console.log(reversedString);
