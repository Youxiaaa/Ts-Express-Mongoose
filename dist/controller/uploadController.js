"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileModel_1 = __importDefault(require("../models/fileModel"));
exports.default = {
    upload: async (req, res) => {
        try {
            const file = new fileModel_1.default({
                filename: req.file.filename,
                filetype: req.file.mimetype,
                path: req.file.path
            });
            file
                .save()
                .then((result) => {
                res.status(201).json({
                    code: 201,
                    message: '上傳檔案成功',
                    result: result.path
                });
            })
                .catch((err) => {
                res.status(400).json({
                    code: 400,
                    message: err._message
                });
            });
        }
        catch (err) {
            if (req.fileValidationError) {
                res.status(400).send({
                    code: 400,
                    message: req.fileValidationError
                });
            }
            else {
                res.status(400).send({
                    code: 400,
                    message: err
                });
            }
        }
    }
};
