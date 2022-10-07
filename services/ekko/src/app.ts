import express, { Express, Request, Response } from "express";
import { healthcheck } from "./routes/healthcheck";

export const createApp = (): Express => {
  const app = express();

  app.get("/healthcheck", healthcheck);

  return app;
};
