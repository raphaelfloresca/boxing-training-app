import { Schema, InferSchemaType } from "mongoose";

export const UserSchema: Schema = new Schema<UserType>({
    _id: {
        type: "String",
        required: true,
    },
    name: {
        type: "String",
        required: true,
    },
    logEntities: {
        type: [String],
        required: true,
    }
});

export declare type UserType = InferSchemaType<typeof UserSchema>;
