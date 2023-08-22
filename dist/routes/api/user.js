"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = __importDefault(require("../../middleware/createUser"));
const userRouter = express_1.default.Router();
userRouter.get("/getUser", (req, res) => {
    res.send("some user");
});
userRouter.post("/createUser", createUser_1.default, (req, res) => {
    res.send("should not send");
});
exports.default = userRouter;
