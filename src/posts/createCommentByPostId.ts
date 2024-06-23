import { Request, Response } from "express";
import { postCollection } from "../db/mongo-db";
import { CommentInputModel, CommentViewModel, PstId,CommentDBType, CommentatorInfo } from "../input-output-types/posts-type";
import { ObjectId } from "mongodb";

export const createCommentByPostId = async (req:Request<PstId,{}, CommentInputModel>, res:Response<CommentDBType>) => {
    try {
        const id = new ObjectId(req.params.id);
        const commentForPost = await postCollection.findOne({ _id: id });
        if (!commentForPost) {
          res.sendStatus(404);
          return;
        };
        const createDate = new Date().toISOString();
        const newComment: CommentDBType = {
            content:	req.body.content,
            createdAt:	createDate,
            commentatorInfo: { 
                userId:	,
                userLogin: ,
            },
        };
        const newCommentDB = await postCollection.insertOne(newComment);
        if(newCommentDB) {
            const mapComment = {
                id: newCommentDB.insertedId,
                content: req.body.content,
                createdAd: createDate,
                commentatorInfo: ,
            };
            res.status(201).json(mapComment);
        } else {
            res.sendStatus(500);
        }
    } catch (error) {
        console.log(error);
    }
};

201
400
401
404