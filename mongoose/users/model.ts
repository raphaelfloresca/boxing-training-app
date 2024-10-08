import mongoose, { model } from "mongoose";
import { UserSchema, UserType } from "mongoose/users/schema";


const Users = mongoose.models.users ||
model<UserType>("users", UserSchema);

export default Users;
