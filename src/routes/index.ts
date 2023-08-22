import express from "express";
import goalRouter from "./api/goal";
import userRouter from "./api/user";

const apiRouter = express.Router();

apiRouter.use("/goal", goalRouter);
apiRouter.use("/user", userRouter);

export default apiRouter;
