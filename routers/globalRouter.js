import express from "express";
/* url 저장 routes */
import routes from "../routes";
/* Controller*/
import { join, login, logout } from "../controller/userController";
import { home, search } from "../controller/videoController";

const globalRouter = express.Router();

/*video controller*/
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

/* user controller */
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
