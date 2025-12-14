let token;
const request = require("supertest");
const app = require("../app");

beforeAll(async () => {
  const res = await request(app).post("/api/auth/login").send({
    username: "admin",
    password: "admin123"
  });
  token = res.body.token;
});
describe("Sweet APIs", () => {
  it("should add sweet (admin)", async () => {
    const res = await request(app)
      .post("/api/sweets")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Ladoo",
        category: "Indian",
        price: 10,
        quantity: 50
      });

    expect(res.statusCode).toBe(201);
  });

  it("should list sweets", async () => {
    const res = await request(app).get("/api/sweets").set("Authorization", `Bearer ${token}`);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
