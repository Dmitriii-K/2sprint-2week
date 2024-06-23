import { Request, Response } from "express";
import {ComId} from "../input-output-types/eny-type";
import { CommentInputModel, CommentViewModel } from "../input-output-types/posts-type";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { postCollection } from "../db/mongo-db";
import { ObjectId } from "mongodb";


export const updateComment = async (req:Request<ComId, {}, CommentInputModel>, res:Response<CommentViewModel | OutputErrorsType>) => {
    try {
        const id = new ObjectId(req.params.id);
        const findComment = await postCollection.findOne({ _id: id });
        if (!findComment) {
          res.sendStatus(404);
        } else {
          const comment = await postCollection.updateOne(
            { _id: id },
            {
              $set: {
                content: req.body.content,
              },
            }
          );
          res.sendStatus(204);
        }
        return;
      } catch (error) {
        console.log(error);
      }
};

204
400
401
403
404