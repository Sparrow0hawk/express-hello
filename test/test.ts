import { server } from "../app.js";
import request from "supertest";

request(server)
  .get("/")
  .expect("<h1>Hello world!</h1>")
  .end((err, res) => {
    if (err) throw err;
  });
