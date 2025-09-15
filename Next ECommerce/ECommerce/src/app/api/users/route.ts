
// export async function Method(){}

import { Users } from "lucide-react";
import { NextResponse } from "next/server";

// export async function GET(){


//     return {
//       name: 'ahmed',
//       email: 'ahmed@gmail.com',
//     };
// }
// has error

// api return json data
// export async function GET() {
//     return NextResponse.json({
//         name: 'ahmed',
//         email: 'ahmed@gmail.com',
//     })
// }
interface IUser {
    name: string;
    email: string;
}
const User: IUser[] = []
export async function GET() {
    return NextResponse.json(User)
}
// send data in body
// export async function POST(req: Request) {
//     // req has method json type promise
//     const body = await req.json()
//     // body has something send in body 
//     User.push(body)
//     return NextResponse.json({
//         message: 'success',
//         data: User
//     });
// }

export async function POST(req: Request) {
    const body = await req.json()
    let isEmailExist: boolean = false
    for (let i = 0; i < User.length; i++) {
        if (body.email == User[i].email) {
            isEmailExist = true
        }
    }
    if (!isEmailExist) {
        User.push(body)
        return NextResponse.json({
            message: 'success',
            data: User
        }, {
            status: 201
        });
    } else {
        return NextResponse.json(
            {
                message: 'Error Email already exist ',
            },
            {
                status: 400,
            }
        );
    }
}
