import { mockList } from "./mockList";

export const mockCreatedList = {
    ...mockList,
    "favs": expect.any(Array),
    "__v": expect.any(Number),
    "_id": expect.any(String),
    "id": expect.any(String),
    "createdAt": expect.any(String),
    "updatedAt": expect.any(String),
}