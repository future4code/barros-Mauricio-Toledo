// ex 1
/*function isOneEdit(strA: string, strB: string): boolean {
    
    if (Math.abs(strB.length - strA.length) > 1) return false

    if (strA.length > strB.length) return strA.includes(strB)
    if (strB.length > strA.length) return strB.includes(strA)

    let charsDiffCount = 0
    for (let i = 0; i < strA.length; i++) {
        if (strA[i]!== strB[i]) {
            charsDiffCount++
        }
    return charsDiffCount===1
}
}*/
// ex 2
/*export const stringCompression = (input) => {
    const subStrings =  []
    let charCount = 0 
    let lastChar = input[0]

    for (const char of input) {
        if (char !== lastChar) {
            subStrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
    }
    charCount++;

}
subStrings.push(lastChar + charCount);
let result = "";
for (const key of subStrings) {
    result += key;
}
return result.length > input.length?  input : result;
}*/