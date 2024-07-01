import mongoose, { model } from "mongoose";
import { UserSchema, UserType } from "mongoose/users/schema";


export default mongoose.models.users ||
  model<UserType>("users", UserSchema);
