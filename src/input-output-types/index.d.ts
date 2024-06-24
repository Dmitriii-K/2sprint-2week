import { UserDBModel } from "./users-type"

declare global {
    namespace Express {
        export interface Request {
            userId: string | null
        }
    }
}

declare global {
    namespace Express {
        export interface Request {
            user: UserDBModel | null
        }
    }
}