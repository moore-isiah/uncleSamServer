import { goalInterface } from "./goal";
import mongoose, { Schema } from "mongoose";
import { GoalSchema } from "./goal";

export interface userInterface {
  id: Schema.Types.UUID;
  userName: String;
  firstName?: String;
  lastName?: String;
  email: String;
  goals?: goalInterface[];
}

var UserSchema = new Schema<userInterface>({
  id: {
    type: Schema.Types.UUID,
    unique: true,
    required: [true, "can't be blak"],
  },
  userName: { type: String, unique: true, required: [true, "can't be blank"] },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true, required: [true, "can't be blank"] },
  goals: { type: [GoalSchema] },
});

export default mongoose.model("User", UserSchema);
