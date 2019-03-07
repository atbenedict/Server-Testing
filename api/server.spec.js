const request = require("supertest");

const server = require("./server.js");

describe("sever.js", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return 200 OK using the squad", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/");

      expect(res.type).toBe("application/json");
    });

    it('should return { api: "up" }', async () => {
      const res = await request(server).get("/");

      expect(res.body).toEqual({ api: "up" });
    });
  });
});

// http status code
// format of the data (JSON)
// shape of the response body
