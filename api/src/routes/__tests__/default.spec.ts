import request from "supertest";
import { app } from "../../server";

describe("Verificando a integridade da rota inicial '/'", () => {
    it("Deve retornar status 200", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });

    it("Deve retornar application/json no header Content-Type", async () => {
        const response = await request(app).get("/");
        expect(response.headers['content-type']).toContain('application/json');
    });

    it("Deve retornar { data: 'Wellcome to API connect...' }", async () => {
        const response = await request(app).get("/");
        expect(response.body).toEqual({ data: 'Wellcome to API connect...' });
    });
});