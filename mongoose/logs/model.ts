import mongoose, { model } from "mongoose";
import { LogSchema, LogType } from "mongoose/logs/schema";


export default mongoose.models.logs ||
  model<LogType>("logs", LogSchema);
