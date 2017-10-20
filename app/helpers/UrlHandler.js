"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlHandler = function (url) {
    var splitUrl = url.split(".");
    var sUrl = "";
    splitUrl.forEach(function (element) {
        sUrl += "/" + element;
    });
    return "/" + sUrl;
};
