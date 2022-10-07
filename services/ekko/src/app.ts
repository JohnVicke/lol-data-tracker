import express, { Express, Request, Response } from "express";
import { apiRouter } from "./routes/api";
import { healthcheck } from "./routes/healthcheck";

export const createApp = (): Express => {
  const app = express();

  app.get("/healthcheck", healthcheck);

  app.use("/api", apiRouter);
  return app;
};
