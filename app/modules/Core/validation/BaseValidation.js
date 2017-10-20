"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseValidation = /** @class */ (function () {
    function BaseValidation() {
    }
    BaseValidation.prototype.isNumber = function (n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); };
    ;
    BaseValidation.prototype.isSpecial = function (text) { return /[^a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]/.test(text); };
    ;
    BaseValidation.prototype.isEmail = function (email) { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); };
    ;
    BaseValidation.prototype.istime = function (time) { return /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(time); };
    ;
    BaseValidation.prototype.isdate = function (date) { return /((((19|20)([2468][048]|[13579][26]|0[48])|2000)-02-29|((19|20)[0-9]{2}-(0[4678]|1[02])-(0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}-(0[1359]|11)-(0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}-02-(0[1-9]|1[0-9]|2[0-8]))))/.test(date); };
    ;
    BaseValidation.prototype.isBoolean = function (n) { return typeof n === 'boolean'; };
    ;
    BaseValidation.prototype.isvalidOTP = function (text) { return /^[a-z0-9_]*$/.test(text); };
    ;
    BaseValidation.prototype.isalphanumeric = function (text) { return /^[a-zA-Z0-9_]*$/.test(text); };
    ;
    BaseValidation.prototype.isalpha = function (text) { return /^[a-zA-Z_]*$/.test(text); };
    ;
    return BaseValidation;
}());
exports.BaseValidation = BaseValidation;
