/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let x = init;
    return {
        increment: function() {
            return ++x;
        },
        decrement: function() {
            return --x;
        },
        reset: function() {
            return x = init;
        }
    }
};

//49ms beats 95.07%
//51.87mb beats 20.14%