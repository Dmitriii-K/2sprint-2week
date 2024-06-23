import { Request, Response } from "express";
import { LoginInputModel, LoginSuccessViewModel } from "../input-output-types/auth-type";
import { userCollection } from "../db/mongo-db";
import { UserDBModel } from "../input-output-types/users-type";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { WithId } from "mongodb";
const  bcrypt  = require ( 'bcryptjs' ); 


export const authUser = async (
  req: Request<any, any, LoginInputModel>,
  res: Response<LoginSuccessViewModel | OutputErrorsType>
) => {
  try {
  const loginOrEmail = req.body.loginOrEmail;
  const password = req.body.password;

    const authUser: WithId<UserDBModel> | null = await userCollection.findOne({ $or: [{ login: loginOrEmail }, { email: loginOrEmail }] });
    if (!authUser) {
      res.status(401).json({ errorsMessages: [{field: 'user', message: 'user not found'}] });
      return;
    };
  const isCorrect = await bcrypt.compare( password, authUser?.password);
    if(isCorrect) {
      res.sendStatus(204);
    } else {
      res.status(401).json({ errorsMessages: [{field: 'password and login', message: 'password or login is wrong'}] });
    }
  } catch (error) {
    console.log(error);
  }
};

200;!
400;
401;
