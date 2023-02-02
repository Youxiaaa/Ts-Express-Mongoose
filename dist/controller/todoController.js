"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoModel_1 = __importDefault(require("../models/todoModel"));
exports.default = {
    add: async (req, res) => {
        try {
            const newTodo = new todoModel_1.default({
                title: req.body.title,
                isCompleted: false
            });
            await newTodo.save();
            const allTodos = await todoModel_1.default.find({ deletedAt: { $eq: null } }, 'title isCompleted');
            res.status(201).send({
                code: 201,
                message: '新增todos成功',
                todos: allTodos
            });
        }
        catch (err) {
            res.status(401).send({
                code: 401,
                message: '新增todos失敗'
            });
        }
    },
    get: async (req, res) => {
        try {
            const todos = await todoModel_1.default.find({ deletedAt: { $eq: null } }, 'title isCompleted');
            res.status(200).send({
                code: 200,
                todos,
                message: '取得todos成功'
            });
        }
        catch (error) {
            res.status(400).send({
                code: 400,
                message: '取得todos失敗'
            });
        }
    },
    update: async (req, res) => {
        const findTodo = await todoModel_1.default.findOne({
            $and: [
                { _id: { $eq: req.body.id } },
                { deletedAt: { $eq: null } }
            ]
        });
        if (!findTodo) {
            try {
                await todoModel_1.default.updateOne({ _id: req.params.id }, req.body);
                const allTodo = await todoModel_1.default.find({ deletedAt: { $eq: null } }, 'title isCompleted');
                res.status(201).send({
                    code: 201,
                    message: '修改todo成功',
                    todos: allTodo
                });
            }
            catch (err) {
                res.status(401).send({
                    code: 401,
                    message: '修改todo失敗'
                });
            }
        }
        else {
            res.status(401).send({
                code: 401,
                message: '修改todo失敗'
            });
        }
    },
    delete: async (req, res) => {
        const findTodo = await todoModel_1.default.findOne({
            $and: [
                { _id: { $eq: req.params.id } },
                { deletedAt: { $eq: null } }
            ]
        });
        if (!findTodo) {
            return res.status(401).send({
                code: 401,
                message: '刪除todo失敗'
            });
        }
        try {
            await todoModel_1.default.updateOne({ _id: `${req.params.id}` }, { deletedAt: new Date() });
            const allTodo = await todoModel_1.default.find({ deletedAt: { $eq: null } }, 'title isCompleted');
            res.status(201).send({
                code: 201,
                message: '刪除todo成功',
                todos: allTodo
            });
        }
        catch (err) {
            res.status(401).send({
                code: 401,
                message: '刪除todo失敗'
            });
        }
    }
};
