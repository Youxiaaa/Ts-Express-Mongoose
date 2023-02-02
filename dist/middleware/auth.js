"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jwt = require('jsonwebtoken');
function verifyJWT(req, res, next) {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            if (!token)
                return res.status(401).send({
                    code: 401,
                    message: '拒絕訪問'
                });
            const decoded = jwt.verify(token, 'secret');
            req.user = decoded;
            next();
        }
        else {
            return res.status(401).send({
                code: 401,
                message: '拒絕訪問'
            });
        }
    }
    catch (err) {
        return res.status(401).send({
            code: 401,
            message: err.message
        });
    }
}
exports.verifyJWT = verifyJWT;
