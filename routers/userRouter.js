import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editprofile, onlyPrivate, editProfile);
userRouter.get(routes.changepassword, onlyPrivate, changePassword);
userRouter.get(routes.userdetail(), userDetail);

export default userRouter;
