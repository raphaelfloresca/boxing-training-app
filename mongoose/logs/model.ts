import mongoose, { model } from "mongoose";
import { LogSchema, LogType } from "mongoose/logs/schema";


const Logs = mongoose.models.logs ||
  model<LogType>("logs", LogSchema);

export default Logs;