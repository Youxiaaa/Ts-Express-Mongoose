"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/demoDB')
    .then(() => console.log('Connect to MongoDB'))
    .catch((err) => console.log('Failed to connect MongoDB', err));
exports.default = mongoose_1.default;
