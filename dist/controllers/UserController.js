"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUser = void 0;
const db_1 = __importDefault(require("../db"));
const getUser = async (req, res) => {
    try {
        const [rows] = await db_1.default.query('SELECT * FROM users');
        console.log(rows);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users from database' });
    }
};
exports.getUser = getUser;
const postUser = (req, res) => {
    res.send('创建用户');
};
exports.postUser = postUser;
