const repeatString = function(string, num) {
    if (num < 0) { 
    return "ERROR";
    } else {
        let resultString = "";
        for (i = 0; i < num; i++) {
            resultString = resultString + string;
        }
        
        return resultString;
    }
};

console.log(repeatString(2, "hej"));
// Do not edit below this line
module.exports = repeatString;
