import { Request, Response } from "express";
import { MeViewModel } from "../input-output-types/auth-type";
import { userCollection } from "../db/mongo-db";


export const getUserInformation = async (req: Request, res: Response<MeViewModel>) => {
    try {
        const userInform: MeViewModel = await userCollection.find({});
        res.status(200).json(userInform);
    } catch (error) {
        console.log(error);
    }

};