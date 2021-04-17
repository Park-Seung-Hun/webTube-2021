import express from "express";
import { postRegisterView } from "../controller/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

export default apiRouter;
/*
server와 통신하기 위한 URL(유저는 접속이 불가능하다.)
*/
