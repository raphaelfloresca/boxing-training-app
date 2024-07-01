/**
 * Connects to mongoDB at MONGO_URI
 */
// import the default export mongoose and
// the named export ConnectOptions from
// the mongoose module in node_modules.
// node_modules are globally resolved.
import mongoose, { ConnectOptions } from "mongoose";
// get the connection string from the environment vars

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI.length) {
    throw new Error(
        "Please define the MONGO_URI environment variable (.env.local)"
    );
}
// A global variable maintains a connection across hot reloads.
// It prevents connections growing exponentially.
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
// use an async function to connect to the database
// use / inferes the return type Promise<any>
async function dbConnect(): Promise<any> {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        // exlicity type as ConnectOptions to check
        // for available properties
        const opts: ConnectOptions = {
            bufferCommands: false,
            maxIdleTimeMS: 10000,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 20000,
        };
        // use a Promise to wait for the established connection
        // this is not instant, it is asynchronous.
        // the database is "somewhere".
        // We use the promise / then syntax here for educational purpose
        // the next async calls are await based
        cached.promise = mongoose
            // connect and wait
            // as soon as the promise is resolved
            // and the conenction is esablished
            // then return the connection
            .connect(MONGO_URI, opts)
            .then((mongoose) => mongoose)
            .catch((err: any) => {
                // error handling

                throw new Error(String(err));
            });
    }

    // use await to wait for the asynchronous promise
    // to be available. Its a similar functionality as
    // the promise pattern, just a different syntax.
    try {
        // wait until the promise is resolved (.then() executed)
        // assign the return value and proceed
        cached.conn = await cached.promise;
    } catch (err) {
        // handle errors
        throw new Error(String(err));
    }
    // return the connection
    return cached.conn;
}

export default dbConnect;
