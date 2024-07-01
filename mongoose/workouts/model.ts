import mongoose, { model } from "mongoose";
import { WorkoutSchema, WorkoutType } from "mongoose/workouts/schema";


export default mongoose.models.workouts ||
  model<WorkoutType>("workouts", WorkoutSchema);
