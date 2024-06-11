import { TodoRepo } from "../db"
import type { Request, Response } from "express"

export const getTodo = async (req: Request, res: Response) => {
    try {
        return res.json({
            data: await TodoRepo.find()
        })
    }
    catch (e) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
export const getTodoById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        return res.json({
            data: await TodoRepo.findOne({
                where: {
                    id
                }
            })
        })
    }
    catch (e) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


//HW crate, Update, delete ///