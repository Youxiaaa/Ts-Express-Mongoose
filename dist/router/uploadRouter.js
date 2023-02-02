"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller"));
const middleware_1 = __importDefault(require("../middleware"));
const router = (0, express_1.Router)();
router.post('/upload', middleware_1.default.verifyJWT, middleware_1.default.upload.single('file'), controller_1.default.uploadController.upload);
exports.default = router;
