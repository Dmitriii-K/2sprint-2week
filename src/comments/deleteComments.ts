import { Request, Response } from "express";
import { userCollection } from "../db/mongo-db";
import { ComId } from "../input-output-types/eny-type";
import { ObjectId } from "mongodb";


export const deleteComment = async (req: Request<ComId>, res: Response) => {
    try {
        const id = new ObjectId(req.params.id);
        const deleteComment = await userCollection.deleteOne({ _id: id });
        if (deleteComment.deletedCount === 1) {
          res.sendStatus(204);
        } else {
          res.sendStatus(404);
        }
      } catch (error) {
        console.log(error);
      }
};

204
401/403
404