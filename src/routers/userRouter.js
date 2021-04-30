import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controller/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

/* 프로필 변경 */
userRouter.get(routes.editprofile, onlyPrivate, getEditProfile);
userRouter.post(routes.editprofile, onlyPrivate, uploadAvatar, postEditProfile);

/* 비밀번호 변경 */
userRouter.get(routes.changepassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changepassword, onlyPrivate, postChangePassword);

/* 유저 프로필 */
userRouter.get(routes.userdetail(), userDetail);

export default userRouter;
