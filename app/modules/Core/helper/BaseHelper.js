"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseHelper = /** @class */ (function () {
    function BaseHelper() {
    }
    BaseHelper.prototype.GenerateRandomString = function (len) {
        var text = "";
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < len; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        return text;
    };
    return BaseHelper;
}());
exports.BaseHelper = BaseHelper;
