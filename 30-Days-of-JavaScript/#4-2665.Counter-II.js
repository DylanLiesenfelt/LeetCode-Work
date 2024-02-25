/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init;
    return {
        increment: function() {
            val++;
            return val;
        },
        decrement: function() {
            val--
            return val;
        },
        reset: function() {
            val = init;
            return val;
        }
    }
};