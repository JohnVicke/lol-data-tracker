import { Router } from "express";

export const apiRouter = Router();

apiRouter.get("/champions", (_req, res) => {
  res.status(200).json([]);
});
