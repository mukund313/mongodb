import { Document } from "mongoose";

export interface ITweetInterface {
    tweetId: String,
    content: string,
    createdAt: string,
    adminId: string
}
