require("dotenv").config();
import express from "express";
import routes from "./routes/index";

const app = express();
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(
    "Server started successfully at http://localhost:" + process.env.PORT
  );
});
