"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRoutes_1 = require("./BaseRoutes");
var BaseService_1 = require("./service/BaseService");
var BaseController_1 = require("./controller/BaseController");
var BaseHelper_1 = require("./helper/BaseHelper");
var BaseMiddleware_1 = require("./middleware/BaseMiddleware");
var BaseException_1 = require("./exception/BaseException");
var BaseTransformation_1 = require("./transformation/BaseTransformation");
var BaseValidation_1 = require("./validation/BaseValidation");
var BaseMailer_1 = require("./mailer/BaseMailer");
var Core;
(function (Core) {
    Core.BaseRoutes = BaseRoutes_1.BaseRoutes;
    Core.BaseService = BaseService_1.BaseService;
    Core.BaseController = BaseController_1.BaseController;
    Core.BaseHelper = BaseHelper_1.BaseHelper;
    Core.BaseMiddleware = BaseMiddleware_1.BaseMiddleware;
    Core.BaseException = BaseException_1.BaseException;
    Core.BaseTransformation = BaseTransformation_1.BaseTransformation;
    Core.BaseValidation = BaseValidation_1.BaseValidation;
    Core.BaseMailer = BaseMailer_1.BaseMailer;
    Core.viewEnv = {
        AWS_ACCESS_KEY: process.env.S3_ADMIN_AWS_ACCESS_KEY,
        AWS_SECRET_ACCESS_KEY: process.env.S3_ADMIN_AWS_SECRET_ACCESS_KEY,
        AWS_REGION: process.env.AWS_REGION,
        TEMP_AWS_BUCKET: process.env.TEMP_AWS_BUCKET
    };
})(Core = exports.Core || (exports.Core = {}));
