import express from "express";
import routes from "../routes";
import {
  videos,
  deleteVideo,
  detailVideo,
  editVideo,
  getuploadVideo,
  postuploadVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.uploadvideo, getuploadVideo);
videoRouter.post(routes.uploadvideo, uploadVideo, postuploadVideo);

videoRouter.get(routes.editvideo, editVideo);
videoRouter.get(routes.deletevideo, deleteVideo);

videoRouter.get(routes.detailvideo(), detailVideo);

export default videoRouter;
