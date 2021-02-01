(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Greeter = {}));
}(this, function (exports) { 'use strict';

    /** * @internal */

    var Greeter = /** @class */ (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting + "!";
        };
        Greeter.prototype.greetMe = function () {
            /* istanbul ignore next line */
            {
                // tslint:disable-next-line:no-console
                console.warn('this method is deprecated, use #greet instead');
            }
            return this.greet();
        };
        return Greeter;
    }());

    exports.Greeter = Greeter;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
