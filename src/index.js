import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Good Luck!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
