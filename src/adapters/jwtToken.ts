import { Request, Response } from 'express';
import  jwt from 'jsonwebtoken';
import { SETTINGS } from '../settings';
import { UserDBModel } from '../input-output-types/users-type';
import { ObjectId } from 'mongodb';

export const jwtService = {
async generateToken (user: UserDBModel) {
  const payload = {
    userId: user._id,
    email: user.email,
    login: user.login,
  };
  const options = {
    expiresIn: '1h' 
  };
  const secretKey = SETTINGS.JWT_SECRET_KEY; 
  const token:string = jwt.sign(payload, secretKey, options);
  return {token};
},
async getUserIdByToken (token:string) {
    try {
    const result = jwt.verify(token, SETTINGS.JWT_SECRET_KEY);
      return new ObjectId(result.userId)
    } catch (error) {
        return null;
      }
  }
}
