import { Schema, InferSchemaType } from "mongoose";

export const LogSchema: Schema = new Schema<LogType>({
    _id: {
        type: String,
        required: true,
        auto: true,
    },
    userId: {
        type: String,
        required: true,
        ref: 'User', 
    },
    date: {
        type: Date,
        required: true,
    },
    workouts: [{
        type: String,
        ref: 'Workout' 
    }]
}, {
    timestamps: true 
});

export type LogType = InferSchemaType<typeof LogSchema>;