import { IUser } from "./User"

export interface IComment {
    _id: string
    content: string
    commentCreator: IUser
    post: string
    createdAt: string
}