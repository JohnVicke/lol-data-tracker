import { Handler } from "express";

export const healthcheck: Handler = (_req, res) => {
  res.status(200).end();
};
