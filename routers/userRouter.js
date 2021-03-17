import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.editprofile, editProfile);
userRouter.get(routes.changepassword, changePassword);
userRouter.get(routes.userdetail(), userDetail);

export default userRouter;
