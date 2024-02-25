/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

//48ms beats 72.53%'
//48.30mb beats 52.40%