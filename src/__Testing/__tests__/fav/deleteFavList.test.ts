import { listModelType } from '../../../objects/lists/entity/listModelType';
import { mockCreatedList } from '../../mockup/mockCreatedList';
import { mockList } from '../../mockup/mockList';
import { mockDatabase } from '../../mockup/mockDatabase';
import supertest from "supertest";
import app from '../../../app';
import { mockCreateUser } from '../../mockup/mockCreateUser';


const api = supertest(app);
const db = mockDatabase();
const LOG_IN_ROUTE = "/auth/local/login";
const SIGN_IN_ROUTE = "/auth/local/signup";
const CREATE_FAV_ROUTE = "/api/favs";

let Token = "";
let selectedList = { name: "", _id: "", favs: [] };
let selectedListId = "";

beforeAll(async () => {
  (await db).connect()
  const { email, password } = mockCreateUser;

  await api
    .post(SIGN_IN_ROUTE)
    .send(mockCreateUser)
    .set("Accept", "application/json");

  const response = await api
    .post(LOG_IN_ROUTE)
    .send({ email, password })
    .set("Accept", "application/json");

  Token = response.body.token;

  await api
    .post(CREATE_FAV_ROUTE)
    .send(mockList)
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${Token}`)

  await api
    .post(CREATE_FAV_ROUTE)
    .send(mockList)
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${Token}`)

  const userLists = await api
    .get(CREATE_FAV_ROUTE)
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${Token}`)

  selectedList = userLists.body[0];

  selectedListId = selectedList._id;

});

afterAll(async () => (await db).close());

describe(`${CREATE_FAV_ROUTE} evaluation`, () => {
  it("should return status 500 when no token provided", async () => {
    const response = await api
      .get(CREATE_FAV_ROUTE)
      .set("Accept", "application/json");

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "No token provided" })
  });

  it("should erase a list by id", async () => {
    await api
      .delete(`${CREATE_FAV_ROUTE}/${selectedListId}`)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${Token}`)

    const response = await api
      .get(CREATE_FAV_ROUTE)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${Token}`)
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1)
  });
})