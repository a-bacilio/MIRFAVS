import { mockCreateUser } from '../mockup/mockCreateUser';
import { mockDatabase } from '../mockup/mockDatabase';
import supertest from "supertest";
import app from "../../app"

const api = supertest(app);
const db = mockDatabase();
const LOG_IN_ROUTE = "/auth/local/login";
const SIGN_IN_ROUTE = "/auth/local/signup";


beforeAll(async () => (await db).connect());
afterAll(async () => (await db).close());

describe(`${LOG_IN_ROUTE} evaluation`, () => {
    it("should return status 400 when no provided body", async () => {
      const response = await api
        .post(LOG_IN_ROUTE)
        .set("Accept", "application/json");
  
      expect(response.status).toEqual(400);
      expect(response.body).toEqual({"error":"A password is required"})
    });

    it("should return status 200 when given correct body", async () => {
      await api
        .post(SIGN_IN_ROUTE)
        .send(mockCreateUser)
        .set("Accept", "application/json");
      
      const {email, password} = mockCreateUser;

      const response = await api
        .post(LOG_IN_ROUTE)
        .send({email, password})
        .set("Accept", "application/json");
  
      expect(response.status).toEqual(200);
      expect(Object.keys(response.body)).toEqual(["token"])
    });
})