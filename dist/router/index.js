"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoRouter_1 = __importDefault(require("./todoRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const uploadRouter_1 = __importDefault(require("./uploadRouter"));
exports.default = {
    todoRouter: todoRouter_1.default,
    userRouter: userRouter_1.default,
    uploadRouter: uploadRouter_1.default
};
