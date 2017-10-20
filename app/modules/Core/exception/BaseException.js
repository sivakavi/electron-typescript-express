"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseException = /** @class */ (function () {
    function BaseException(errors) {
        this.errors = errors;
    }
    BaseException.prototype.ThrowException = function (code) {
        if (code) {
            return {
                code: code,
                message: this.errors[code]
            };
        }
        return {
            code: "2000",
            message: "Server Error"
        };
    };
    return BaseException;
}());
exports.BaseException = BaseException;
