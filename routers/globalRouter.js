import express from "express";
/* url 저장 routes */
import routes from "../routes";
/* Controller*/
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controller/userController";
import { home, search } from "../controller/videoController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

/*video controller*/
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

/* user controller */
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter;
