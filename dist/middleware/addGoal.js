"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const goal_1 = __importDefault(require("../models/goal"));
const user_1 = __importDefault(require("../models/user"));
function addGoal(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, id, title, currentAmmount, goalAmmount, description } = req.body;
        console.log(req.body);
        try {
            const newGoal = goal_1.default.create({ id, title, currentAmmount, goalAmmount });
            const filter = { id: userId };
            const update = { goals: newGoal };
            const foundUser = user_1.default.findOne(filter);
            console.log("new goal", newGoal);
            console.log("found user", foundUser);
        }
        catch (e) {
            console.log(e);
        }
        next();
    });
}
exports.default = addGoal;
