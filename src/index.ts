import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.info(`Node app listening on port ${port}`);
});
