import { NextFunction, Request, Response } from "express";
import user from "../models/user";

export default async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.body);
  const { id, userName, firstName, lastName, email } = req.body;
  try {
    const newUser = await user.create({
      id,
      userName,
      email,
    });

    if (firstName) newUser.firstName = firstName;
    if (lastName) newUser.lastName = lastName;
  } catch (e) {
    res.status(500).json({ error: "Trouble creating new user" });
  }

  next();
}
