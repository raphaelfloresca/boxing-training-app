import mongoose from "mongoose";
import { DefaultSession } from "next-auth";

declare global {
    var mongoose: mongoose;
}

declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }
}
