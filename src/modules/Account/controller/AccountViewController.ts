import { Request, Response, NextFunction } from "express";
import { Core } from "../../Core/index";

export class AccountViewController extends Core.BaseController {

    constructor() {
        super();
    }

    index() {
        let self = this;
        return async (req: any, res: any) => {
            return "test.....";
        }
    }
}