import { Request, Response } from "express";
import pool from "../db";

export const getUser = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user');
        console.log(rows);
        res.send({ message: "成功" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error fetching users from database' });
    }
}

export const postUser = (req: Request, res: Response) => {
    res.send('创建用户')
}