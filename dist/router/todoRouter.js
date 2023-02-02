"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller"));
const middleware_1 = __importDefault(require("../middleware"));
const router = (0, express_1.Router)();
router.get('/get', middleware_1.default.verifyJWT, controller_1.default.todoController.get);
router.post('/add', middleware_1.default.verifyJWT, middleware_1.default.filterLanguege, controller_1.default.todoController.add);
router.put('/update/:id', middleware_1.default.verifyJWT, controller_1.default.todoController.update);
router.delete('/delete/:id', middleware_1.default.verifyJWT, controller_1.default.todoController.delete);
exports.default = router;
