import express from "express";
import routes from "../routes";
import {
  videos,
  deleteVideo,
  detailVideo,
  editVideo,
  uploadVideo,
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.uploadvideo, uploadVideo);
videoRouter.get(routes.editvideo, editVideo);
videoRouter.get(routes.deletevideo, deleteVideo);
videoRouter.get(routes.detailvideo, detailVideo);

export default videoRouter;
