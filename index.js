import express from "express";
import { readAll as readAllPosts } from "dbmod/posts/index.js";
import { readAll as readAllCompanies } from "dbmod/companies/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/posts", readAllPosts);
app.get("/companies", readAllCompanies);

app.listen(process.env.PORT || 3000);
