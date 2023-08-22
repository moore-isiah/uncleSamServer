import { UUID } from "crypto";
import mongoose, { Schema } from "mongoose";

export interface goalInterface {
  id: Schema.Types.UUID;
  userId?: Schema.Types.UUID;
  title: String;
  currentAmmount: number;
  goalAmmount: number;
  description?: String;
}

export var GoalSchema = new Schema<goalInterface>({
  id: {
    type: Schema.Types.UUID,
    unique: true,
    required: [true, "can't be blak"],
  },
  userId: { type: Schema.Types.UUID },
  title: { type: String, required: true },
  currentAmmount: { type: Number, required: true },
  goalAmmount: { type: Number, required: true },
  description: { type: String },
});

export default mongoose.model("Goal", GoalSchema);
