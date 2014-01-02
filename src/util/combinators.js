'use strict';

function curry (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var nextArgs = Array.prototype.slice.call(arguments),
            allArgs = args.concat(nextArgs);

        return fn.apply(this, allArgs);
    };
}

module.exports = {
    identity: function (i) { return i; },
    constant: function (k) { return function () { return k; }; },
    noop: function () {},
    curry: curry
};
