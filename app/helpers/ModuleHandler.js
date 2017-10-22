"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
exports.ModuleHandler = function (addModule, path) {
    if (path === void 0) { path = __dirname; }
    var model = [];
    var modulePath = path + '/../modules';
    var modules = addModule;
    modules.forEach(function (element, index) {
        var path = modulePath + "/" + element + "/" + "models";
        if (fs.existsSync(path)) {
            model.push(path);
        }
    });
    return model;
};
