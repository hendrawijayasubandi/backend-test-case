function countOccurrences(input, query) {
    const occurrences = [];
    for (const q of query) {
        const count = input.filter(word => word === q).length;
        occurrences.push(count);
    }
    return occurrences;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const occurrencesResult = countOccurrences(INPUT, QUERY);
console.log(occurrencesResult);