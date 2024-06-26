import { UserDBModel } from "./users-type"

declare global {
    namespace Express {
        export interface Request {
            user: UserDBModel | null
        }
    }
}

declare global {
    namespace Express {
        export interface Locals {
            user: UserDBModel | null
        }
    }
}


// import { Request } from "express"
// declare global {
//     namespace Express {
//         export interface Request {
//             user: any
//         }
//     }
// }