import { Schema, InferSchemaType } from "mongoose";

export const UserSchema: Schema = new Schema<UserType>({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  logs: {
    type: [String],
    default: [],
  }
}, {
  timestamps: true
});

export type UserType = InferSchemaType<typeof UserSchema>;
