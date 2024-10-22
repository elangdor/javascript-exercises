const reverseString = function(inputText) {
    let inputArray = Array.from(inputText);
    let outputArray = [];
    for (let i = inputArray.length; i > 0; i--) {
        outputArray.push(inputArray.pop());
    }
    let outputText = outputArray.join("");
    return outputText;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
