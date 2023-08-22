import express from "express";

const goalRouter = express.Router();

goalRouter.post("/addGoal", (req, res) => {
  res.send("a post request");
});

export default goalRouter;
