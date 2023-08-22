import express, { Express, Request, Response } from "express";
import userRouter from "./routes/api/goal";
import apiRouter from "./routes";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://isiahmdev:6ryzvyim@cluster0.ltxjisu.mongodb.net/?retryWrites=true&w=majority"
);

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("watching all my files");
});

app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`all my shits working now`);
});
