import client from "./client";

describe("GET /users", () => {
  it("responds with JSON", async () => {
    const response = await client.get("/users");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.data.users).toBeInstanceOf(Array);
  });
});
