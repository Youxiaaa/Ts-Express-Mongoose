"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const fileSchema = new dbConfig_1.default.Schema({
    filename: {
        type: String,
        required: true
    },
    filetype: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});
const fileModel = dbConfig_1.default.model('File', fileSchema);
exports.default = fileModel;
