const removeFromArray = function(array, remove) {
    //need to remove multiple as well
    /*if (array.indexOf(remove)) {
        while(array.indexOf(remove) !== -1) {
            let removeIndex = array.indexOf(remove);
            array.splice(removeIndex, 1);
        }
    }*/
    for (let i = 1; i < arguments.length; i++){
        if (array.indexOf(arguments[i]) !== -1) {
            while (array.indexOf(arguments[i]) !== -1 ) {
                let removeIndex2 = array.indexOf(arguments[i])
                array.splice(removeIndex2, 1);
            }
        }

    }
    return array;
};


console.log(removeFromArray([1,2,3,4,5,6,7,1,1,1,2,2], 2,1));

// Do not edit below this line
module.exports = removeFromArray;
