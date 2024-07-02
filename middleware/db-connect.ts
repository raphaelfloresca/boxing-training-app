import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || " ";

if (!MONGO_URI.length) {
  throw new Error(
    "Please define the MONGO_URI environment variable (.env.local)"
  );
}
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<any> {

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {

    const opts: ConnectOptions = {
      bufferCommands: false,
      maxIdleTimeMS: 10000,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 20000,
    };

    cached.promise = mongoose
      .connect(MONGO_URI, opts)
      .then((mongoose) => mongoose)
      .catch((err) => {
        throw new Error(String(err));
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    throw new Error(String(err));
  }

  return cached.conn;
}

export default dbConnect;
