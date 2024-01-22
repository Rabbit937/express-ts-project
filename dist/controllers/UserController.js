"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUser = void 0;
const getUser = (req, res) => {
    res.send('获取用户信息');
};
exports.getUser = getUser;
const postUser = (req, res) => {
    res.send('创建用户');
};
exports.postUser = postUser;
