import express, { Request, Response } from "express";
import { env } from "./env/server";

const app = express();
const port = env.PORT;

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
