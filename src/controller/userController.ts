import { Request, Response } from 'express';
import userModel from '../models/userModal';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export default {
  // 註冊
  register: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({ username });

      if (user) {
        return res.status(401).send({
          code: 401,
          message: '已有此使用者名稱'
        });
      }

      const newUser = new userModel({ username, password });
      newUser.password = await bcrypt.hash(password, 10);
      await newUser.save();

      return res.status(201).send({
        code: 201,
        message: '建立會員成功'
      });
    } catch (err) {
      return res.status(422).send({
        code: 422,
        message: err
      });
    }
  },
  // 登入
  login: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({ username });

      if (!user) return res.status(401).send({
        code: 401,
        message: '帳號或密碼錯誤'
      });
      
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).send({
        code: 401,
        message: '帳號或密碼錯誤'
      });
      const accessToken = jwt.sign({ userId: user._id, type: 'accessToken' }, 'secret', { expiresIn: '1h' });
      const refreshToken = jwt.sign({ userId: user._id, type: 'refreshToken' }, 'refreshSecret', { expiresIn: '1d' });

      return res.status(200).send({
        code: 200,
        message: '登入成功',
        accessToken,
        refreshToken
      });
    } catch (err) {
      return res.status(422).send({
        code: 422,
        message: err
      });
    }
  },
  // 刷新Token
  refreshToken: async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const { authorization } = req.headers as any;

    //! accessToken || refreshToken 任一個沒有 reject
    if (!authorization || !refreshToken) {
      return res.status(401).send({
        code: 401,
        message: '拒絕訪問'
      });
    }

    //! 取得 'Bearer' 後的 Token 字段
    const accessToken = authorization.split(' ')[1];
    const { isValid: refreshTokenValid, userId: refreshUserId } = await verifyToken(refreshToken, 'refreshSecret');
    const { isValid: accessTokenValid, userId: accessUserId } = await verifyToken(accessToken, 'secret', true);

    //! 判斷其中一個失敗 reject
    if (!refreshTokenValid || !accessTokenValid) {
      return res.status(401).send({
        code: 401,
        message: '刷新Token失敗'
      });
    }

    //! 兩個 userId 不同 reject
    if (refreshUserId !== accessUserId) {
      return res.status(401).send({
        code: 401,
        message: '刷新Token失敗'
      });
    }

    try {
      const access_token = jwt.sign({ userId: accessUserId, type: 'accessToken' }, 'secret', { expiresIn: '1h' });
      const refresh_token = jwt.sign({ userId: refreshUserId, type: 'refreshToken' }, 'refreshSecret', { expiresIn: '1d' });

      return res.status(200).send({
        code: 200,
        message: '刷新Token成功',
        access_token,
        refresh_token
      });
    }
    catch (err) {
      return res.status(401).send({
        code: 401,
        message: '刷新Token失敗'
      });
    }
  }
};

async function verifyToken (tokenStr: string, secretStr: string, isIgnore = false) {
  try {
    const decoded = await jwt.verify(tokenStr, secretStr, { ignoreExpiration: isIgnore }); //! ignoreExpiration 忽略過期

    if (decoded) {
      return {
        userId: decoded.userId,
        isValid: true
      };
    }
    return {
      isValid: false
    };
  } catch (err) {
    return {
      isValid: false
    };
  }
}
