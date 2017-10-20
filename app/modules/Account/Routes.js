"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../Core/index");
var AccountViewController_1 = require("./controller/AccountViewController");
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes(route) {
        var _this = _super.call(this) || this;
        _this.accountViewController = new AccountViewController_1.AccountViewController();
        _this.route = route;
        return _this;
    }
    Routes.prototype.Routes = function () {
        var self = this;
        self.route.get("/test", self.accountViewController.getList());
        return self.route;
    };
    return Routes;
}(index_1.Core.BaseRoutes));
exports.Routes = Routes;
