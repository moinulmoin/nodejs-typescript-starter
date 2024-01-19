import dotenv from "dotenv";
import express from "express";
dotenv.config();

const port = process.env.PORT || 3000;

console.log({ port });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});
