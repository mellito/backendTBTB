const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

describe("tags endpoint", () => {
  it("should create a tag", async () => {
    const tag = {
      name_tag: "test",
    };
    const response = await request.post("/api/tags").send(tag);
    expect(response.status).toBe(201);
    expect(response.body).toBe("tag created");
  });
  it("should get all tags", async () => {
    const response = await request.get("/api/tags");
    expect(response.status).toBe(200);
    expect(response.body.length).not.toBeLessThan(0);
  });
  it("should get a tag", async () => {
    const response = await request.get("/api/tags/1");
    expect(response.status).toBe(200);
    expect(response.body.name_tag).toBe("comida");
  });
  it("should not get a tag", async () => {
    const response = await request.get("/api/tags/100");
    expect(response.status).toBe(404);
  });
  it("should update a tag", async () => {
    const tag = {
      name_tag: "cine2",
    };
    const response = await request.put("/api/tags/2").send(tag);
    expect(response.status).toBe(200);
    expect(response.body).toBe("tag updated");
  });
  it("should delete a tag", async () => {
    const response = await request.delete("/api/tags/3");
    expect(response.status).toBe(200);
    expect(response.body).toBe("tag deleted");
  });
  it("should not delete a tag", async () => {
    const response = await request.delete("/api/tags/100");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("tag not found");
  });
  it("should not update a tag", async () => {
    const tag = {
      name_tag: "cine2",
    };
    const response = await request.put("/api/tags/100").send(tag);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("tag not found");
  });
});
