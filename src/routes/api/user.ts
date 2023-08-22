import express from "express";
import createUser from "../../middleware/createUser";

const userRouter = express.Router();

userRouter.get("/getUser", (req, res) => {
  res.send("some user");
});

userRouter.post("/createUser", createUser, (req, res) => {
  res.send("should not send");
});

export default userRouter;
