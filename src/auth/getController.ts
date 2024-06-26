import { Request, Response } from "express";
import { MeViewModel } from "../input-output-types/auth-type";
import { userCollection } from "../db/mongo-db";


export const getUserInformation = async (req: Request, res: Response<MeViewModel>) => {
    try {
        const userMe: MeViewModel = {email: req.user.email, login: req.user.login, userId: req.user._id?.toString()};
        res.status(200).json(userMe);
    } catch (error) {
        console.log(error);
    }

};