const sumAll = function(x, y) {
    let sum = 0;
    let startNum = x;
    let endNum = y;

    if (x < 0 || y < 0) {
        return "ERROR";
    } else if (typeof(x) === "string" || typeof(y) === "string") {
        return "ERROR";
    } else if (x%1 !== 0 || x%1 !== 0) {
        return "ERROR";
    } else if (typeof(x) === "number" && typeof(y) === "number") {

        if (y >= x) {
            startNum = x;
            endNum = y;
        } else if (x > y) {
            startNum = y;
            endNum = x;
        }
        
        for (i = startNum; i <= endNum; i++) {
            sum += i;
        }

        return sum;
    
    } else {
        return "ERROR";
    }
    

};

console.log(sumAll(1.1, 10));

// Do not edit below this line
module.exports = sumAll;
