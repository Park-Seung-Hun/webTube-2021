import express from "express";
import routes from "../routes";
import {
  userDetail,
  changePassword,
  getEditProfile,
  postEditProfile,
} from "../controller/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editprofile, onlyPrivate, getEditProfile);
userRouter.post(routes.editprofile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changepassword, onlyPrivate, changePassword);
userRouter.get(routes.userdetail(), userDetail);

export default userRouter;
