"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterLanguege = void 0;
const dertyWord = ['fuck', 'fuckyou', 'ass'];
function filterLanguege(req, res, next) {
    const values = Object.values(req.body);
    values.forEach((str) => {
        str = str.replace(/\s*/g, '');
        if (!str) {
            res.status(401).send({
                code: 401,
                message: '字串不可為空'
            });
            return;
        }
        if (dertyWord.includes(str)) {
            res.status(401).send({
                code: 401,
                message: '字串包含不雅文字'
            });
            return;
        }
        next();
    });
}
exports.filterLanguege = filterLanguege;
