import Users from "mongoose/users/model";
import {
    FilterUserType,
    FilterWishlistType,
} from "mongoose/users/custom";
import { UserType } from "mongoose/users/schema";

/**
 * actual filter function
 */
async function findUsers(
    filter: FilterUserType | FilterWishlistType | {}
): Promise<UserType[] | []> {
    try {
        let result: Array<UserType | undefined> = await Users.find(
            filter
        );
        return result as UserType[];
    } catch (err) {
        console.log(err);
    }
    return [];
}

/**
 * API / facade to Find all "location"-documents from"locations"-collection via the "locations"-model
 */
export async function findUsersById(
    user_ids: string[]
): Promise<UserType[] | []> {
    let filter = { user_id: user_ids };
    return await findUsers(filter);
}

/**
 *  * API / facade Find all "location"-documents from"locations"-collection via the "locations"-model
 */
export async function findAllUsers(): Promise<UserType[] | []> {
    let filter = {};
    return await findUsers(filter);
}

