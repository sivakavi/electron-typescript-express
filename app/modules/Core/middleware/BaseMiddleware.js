"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseMiddleware = /** @class */ (function () {
    function BaseMiddleware() {
    }
    BaseMiddleware.prototype.Exception = function () {
        return function (err, req, res, next) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        };
    };
    return BaseMiddleware;
}());
exports.BaseMiddleware = BaseMiddleware;
