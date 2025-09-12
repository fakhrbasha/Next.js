
// export async function Method(){}

import { NextResponse } from "next/server";

// export async function GET(){


//     return {
//       name: 'ahmed',
//       email: 'ahmed@gmail.com',
//     };
// }
// has error

// api return json data
export async function GET() {
    return NextResponse.json({
        name: 'ahmed',
        email: 'ahmed@gmail.com',
    })
}
