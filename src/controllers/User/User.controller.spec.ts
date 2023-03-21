import request from "supertest";
import { app } from "../../app";
import { UserDTO } from "./User.dto";

describe("Teste do controller /test.", () => {
  describe("POST /test", () => {
    it("Deve ser possível criar um novo user", async () => {
      const response = await request(app)
        .post("/api/test")
        .send({
          email: "test@gggggg.com",
          password: "Test@12456ddgf",
          name: "test",
        } as UserDTO);
      expect(response.status).toBe(200);
    });
  });
  describe("GET /test", () => {
    it("Deve ser possível listar todos os usuarios  ", async () => {
      const response = await request(app).get("/api/test");
      expect(response.status).toBe(200);
    });
  });
});
