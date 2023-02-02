"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const todoSchema = new dbConfig_1.default.Schema({
    title: {
        type: String,
        require: true
    },
    isCompleted: {
        type: Boolean,
        require: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });
const todoModel = dbConfig_1.default.model('Todos', todoSchema);
exports.default = todoModel;
