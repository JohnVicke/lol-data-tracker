import express, { Express, Request, Response } from "express";

export const createApp = (): Express => {
  const app = express();

  app.get("/", (_req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  return app;
};
