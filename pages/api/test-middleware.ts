import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "middleware/db-connect";
// import Locations from "mongoose/locations/model";
import { findAllUsers } from "mongoose/users/services";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    await dbConnect();
    const users = await findAllUsers();
    res.status(200).json(users);
}
