require("dotenv").config();
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(
    "Server started successfully at http://localhost:" + process.env.PORT
  );
});
