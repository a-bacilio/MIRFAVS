import * as jwt from 'jsonwebtoken';
// declare module 'jsonwebtoken' {
//   export interface JwtPayload {
//     userId: string;
//   }
// }

declare module 'jsonwebtoken' {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
    id: string;
  }
}
