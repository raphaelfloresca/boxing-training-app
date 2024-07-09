import mongoose, { model } from "mongoose";
import { WorkoutSchema, WorkoutType } from "mongoose/workouts/schema";


const Workouts =  mongoose.models.workouts ||
  model<WorkoutType>("workouts", WorkoutSchema);

export default Workouts;