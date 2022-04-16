import { mockCreateUser } from '../mockup/mockCreateUser';
import { mockDatabase } from '../mockup/mockDatabase';
import supertest from "supertest";
import app from "../../app"

const api = supertest(app);
const db = mockDatabase();
const SIGN_IN_ROUTE = "/auth/local/signup";

beforeAll(async () => (await db).connect());
afterAll(async () => (await db).close());

describe(`${SIGN_IN_ROUTE} evaluation`, () => {
    it("should return status 400 when no provided body", async () => {
      const response = await api
        .post(SIGN_IN_ROUTE)
        .set("Accept", "application/json");
  
      expect(response.status).toEqual(400);
      expect(response.body).toEqual({"error":"A password confirmation is required"})
    });

    it("should return status 200 when given correct body", async () => {
      const response = await api
        .post(SIGN_IN_ROUTE)
        .send(mockCreateUser)
        .set("Accept", "application/json");
  
      expect(response.status).toEqual(201);
      expect(response.body).toEqual({"message":"success"})
    });
})