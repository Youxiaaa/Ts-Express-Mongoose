"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const fs = require("fs");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadsDirectory = './uploads/';
        if (!fs.existsSync(uploadsDirectory)) {
            fs.mkdirSync(uploadsDirectory);
        }
        cb(null, uploadsDirectory);
    },
    filename: function (req, file, cb) {
        cb(null, `${(0, dayjs_1.default)().format('YYYYMMDDhhmmss')}-${file.originalname}`);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        req.fileValidationError = '檔案格式不正確';
        cb(null, false, req.fileValidationError);
    }
};
exports.upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
});
