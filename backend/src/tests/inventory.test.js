const request = require("supertest");
const app = require("../app");

let token;
let sweetId;

beforeAll(async () => {
  // login as admin
  const loginRes = await request(app)
    .post("/api/auth/login")
    .send({
      username: "admin",
      password: "admin123"
    });


  token = loginRes.body.token;

  // create a sweet
  const sweetRes = await request(app)
    .post("/api/sweets")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Ladoo",
      category: "Indian",
      price: 10,
      quantity: 5
    });

  sweetId = sweetRes.body.id;
});

describe("Inventory Rules", () => {
  it("should prevent negative stock", async () => {
    const res = await request(app)
      .post(`/api/sweets/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 999 });

    expect(res.statusCode).toBe(400);
  });

  it("should allow valid purchase", async () => {
    const res = await request(app)
      .post(`/api/sweets/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 2 });

    expect(res.statusCode).toBe(200);
    expect(res.body.quantity).toBeGreaterThanOrEqual(0);
  });
});
