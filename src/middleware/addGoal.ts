import goal from "../models/goal";
import user from "../models/user";
import { NextFunction, Response, Request } from "express";

export default async function addGoal(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId, id, title, currentAmmount, goalAmmount, description } =
    req.body;
  console.log(req.body);

  try {
    const newGoal = goal.create({ id, title, currentAmmount, goalAmmount });
    const filter = { id: userId };
    const update = { goals: newGoal };
    const foundUser = user.findOne(filter);
    console.log("new goal", newGoal);
    console.log("found user", foundUser);
  } catch (e) {
    console.log(e);
  }

  next();
}
