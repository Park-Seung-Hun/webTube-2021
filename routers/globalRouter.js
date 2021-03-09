import express from "express";
/* url 저장 routes */
import routes from "../routes";
/* Controller*/
import { getJoin, login, logout, postJoin } from "../controller/userController";
import { home, search } from "../controller/videoController";

const globalRouter = express.Router();

/*video controller*/
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

/* user controller */
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
