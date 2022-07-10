const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

describe("tags endpoint", () => {
  it("should create a tag", async () => {
    const post = {
      title: "Test6",
      description_post: "making insert test 6",
    };
    const response = await request.post("/api/posts").send(post);
    expect(response.status).toBe(201);
    expect(response.body).toBe("post created");
  });
  it("should get all tags", async () => {
    const response = await request.get("/api/posts");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it("should get a post", async () => {
    const response = await request.get("/api/posts/1");
    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Test1");
  });
  it("should not get a post", async () => {
    const response = await request.get("/api/posts/100");
    expect(response.status).toBe(404);
  });
  it("should update a post", async () => {
    const post = {
      title: "Test2 updated",
      description_post: "making insert test 2 updated",
    };
    const response = await request.put("/api/posts/2").send(post);
    expect(response.status).toBe(200);
    expect(response.body).toBe("post updated");
  });
  it("should delete a tag", async () => {
    const response = await request.delete("/api/posts/3");
    expect(response.status).toBe(200);
    expect(response.body).toBe("post deleted");
  });
  it("should not delete a tag", async () => {
    const response = await request.delete("/api/posts/100");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("post not found");
  });
});
