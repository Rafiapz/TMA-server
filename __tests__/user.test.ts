import mongoose from 'mongoose'
import app from '../src/app'
import request from 'supertest'

require("dotenv").config();


describe("GET /user/fetch-user", () => {
    it("should return all products", async () => {
        const res = await request(app).get("/user/fetch-user");
        expect(res.statusCode).toBe(200);

    });
});