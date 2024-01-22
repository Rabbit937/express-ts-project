import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
    res.send('获取用户信息');
}

export const postUser = (req: Request, res: Response) => {
    res.send('创建用户')
}