import { mockListWithNoLinkFav } from './../../mockup/mockListWithNoLinkFav';
import { mockListWithNoDescriptionFav } from './../../mockup/mockListWithNoDescriptionFav';
import { mockListWithNoTitleFav } from './../../mockup/mockListWithNoTitleFav';
import { mockListWithoutName } from './../../mockup/mockListWithoutName';
import { mockList } from '../../mockup/mockList';
import { mockDatabase } from '../../mockup/mockDatabase';
import supertest from "supertest";
import app from '../../../app';
import {mockCreateUser} from '../../mockup/mockCreateUser';


const api = supertest(app);
const db = mockDatabase();
const LOG_IN_ROUTE = "/auth/local/login";
const SIGN_IN_ROUTE = "/auth/local/signup";
const CREATE_FAV_ROUTE = "/api/favs";

let Token = ""

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

});

afterAll(async () => (await db).close());

describe(`${CREATE_FAV_ROUTE} evaluation`, () => {
  it("should return status 500 when no token provided", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .set("Accept", "application/json");

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "No token provided" })
  });

  it("should return status 500 when no body provided", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .set("Accept", "application/json")
      .set("Authorization",`Bearer ${Token}`)

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "There are missing parameters" })
  });

  it("should return status 201 when body provided", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .send(mockList)
      .set("Accept", "application/json")
      .set("Authorization",`Bearer ${Token}`)

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({ "message": "list created" })
  });

  it("should return status 500 without name in List", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .send(mockListWithoutName)
      .set("Accept", "application/json")
      .set("Authorization",`Bearer ${Token}`)

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "Some favs are invalid" })
  });

  it("should return status 500 with a fav with no title in List", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .send(mockListWithNoTitleFav)
      .set("Accept", "application/json")
      .set("Authorization",`Bearer ${Token}`)

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "Some favs are invalid" })
  });

  it("should return status 500 with a fav with no description in List", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .send(mockListWithNoDescriptionFav)
      .set("Accept", "application/json")
      .set("Authorization",`Bearer ${Token}`)

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "Some favs are invalid" })
  });

  it("should return status 500 with a fav with no link in List", async () => {
    const response = await api
      .post(CREATE_FAV_ROUTE)
      .send(mockListWithNoLinkFav)
      .set("Accept", "application/json")
      .set("Authorization",`Bearer ${Token}`)

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({ "error": "Some favs are invalid" })
  });

})