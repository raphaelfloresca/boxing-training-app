import { Schema, InferSchemaType } from "mongoose";

export const WorkoutSchema: Schema = new Schema<WorkoutType>({
    _id: {
        type: String,
        required: true,
    },
    logId: {
        type: String,
        required: true,
        ref: 'Log',
    },
    question: {
        timeAvailable: {
            type: Number,
            required: true,
        },
        intensityLevel: {
            type: String,
            required: true,
            enum: ['low', 'mid', 'high'],
        },
    },
    activities: {
        skipping: {
            roundsCompleted: {
                type: Number,
                default: 0,
            },
            totalRounds: {
                type: Number,
                required: true,
            },
            totalTime: {
                type: Number,
                required: true,
            },
        },
        sandbag: {
            roundsCompleted: {
                type: Number,
                default: 0,
            },
            totalRounds: {
                type: Number,
                required: true,
            },
            totalTime: {
                type: Number,
                required: true,
            },
        },
        shadowBoxing: {
            roundsCompleted: {
                type: Number,
                default: 0,
            },
            totalRounds: {
                type: Number,
                required: true,
            },
            totalTime: {
                type: Number,
                required: true,
            },
        },
    },
}, {
    timestamps: true
});

export type WorkoutType = InferSchemaType<typeof WorkoutSchema>;