"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goal_1 = __importDefault(require("./api/goal"));
const user_1 = __importDefault(require("./api/user"));
const apiRouter = express_1.default.Router();
apiRouter.use("/goal", goal_1.default);
apiRouter.use("/user", user_1.default);
exports.default = apiRouter;
