import { IComment } from "./Comment"
import { IUser } from "./User"

export interface IPost {
  _id: string
  body?: string
  image?: string
  user: IUser
  createdAt: string
  comments: IComment[]
  id: string
}

// json to ts