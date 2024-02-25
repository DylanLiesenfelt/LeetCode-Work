/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

//51ms beats 58.58%
//48.98mb beats 17.51% 