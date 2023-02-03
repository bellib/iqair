require('dotenv').config();
const request = require("supertest");
const app = require("../src/server");
const mongoose = require('mongoose');
const dbConfig = require('../src/config/db');
mongoose.set('strictQuery', false);

beforeEach(async () => {
  await mongoose.connect(dbConfig.url);
});

  describe("Test the iq Api", () => {

    it("It should return nearest city data",  async () => {
 
      const res = await request(app).get("/api/iq");
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      
    });

    it("It should return most polluted time",  async () => {
 
      const res = await request(app).get("/api/most-polluted");
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      
    });

    it("It should return nearest city data by coordinat",  async () => {
 
      const res = await request(app).get("/api/iq/48.856613/2.352222");
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      
    });

    it("It should not return nearest city data by false coordinat",  async () => {
 
      const res = await request(app).get("/api/iq/48.856l613/2.35222l2");
      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
      
    });

  
  });

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
  
   




