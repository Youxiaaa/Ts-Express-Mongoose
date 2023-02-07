import { Request, Response } from 'express';
import todoModel from '../models/todoModel';
// import dayjs from 'dayjs'
export default {
  add: async (req: Request, res: Response) => {
    try {
      const newTodo = new todoModel({
        title: req.body.title,
        isCompleted: false
      });
      await newTodo.save();
      const allTodos = await todoModel.find({ deletedAt: { $eq: null } }, 'title isCompleted');
      res.status(201).send({
        code: 201,
        message: '新增todos成功',
        todos: allTodos
      });
    } catch (err) {
      res.status(401).send({
        code: 401,
        message: '新增todos失敗'
      });
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const todos = await todoModel.find({ deletedAt: { $eq: null } }, 'title isCompleted');
      res.status(200).send({
        code: 200,
        todos,
        message: '取得todos成功'
      });
    } catch (error) {
      res.status(400).send({
        code: 400,
        message: '取得todos失敗'
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      await todoModel.findOneAndUpdate({ _id: req.params.id }, req.body);

      const todos = await todoModel.find({ deletedAt: null }, 'title isCompleted');

      res.status(201).send({
        code: 201,
        message: '修改todo成功',
        todos
      });
    } catch (error) {
      res.status(401).send({
        code: 401,
        message: '修改todo失敗',
        error
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    const findTodo = await todoModel.findOne({
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
      await todoModel.updateOne({ _id: `${req.params.id}` }, { deletedAt: new Date() });
      const allTodo = await todoModel.find({ deletedAt: { $eq: null } }, 'title isCompleted');
      res.status(201).send({
        code: 201,
        message: '刪除todo成功',
        todos: allTodo
      });
    } catch (err) {
      res.status(401).send({
        code: 401,
        message: '刪除todo失敗'
      });
    }
  }
};
