import express, { Express, Request, Response } from "express";
import { healthcheck } from "./routes/healthcheck";

export const createApp = (): Express => {
  const app = express();

  app.get("/healthcheck", healthcheck);

  app.get("/", (_req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  return app;
};
