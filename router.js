import express from "express";

export const userRouter = express.Router();

// 여러 route 들을 다룬다.
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
