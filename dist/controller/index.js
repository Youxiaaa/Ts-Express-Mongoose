"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoController_1 = __importDefault(require("./todoController"));
const userController_1 = __importDefault(require("./userController"));
const uploadController_1 = __importDefault(require("./uploadController"));
exports.default = {
    todoController: todoController_1.default,
    userController: userController_1.default,
    uploadController: uploadController_1.default
};
