import express from "express";
import cors from "cors";

const app = express();
import "./config/db.js";

import bookRouter from "./routers/bookRouter.js";
import userRouter from "./routers/userRouter.js";

import redisSession from "./config/redis.js";

app.use(express.json());
app.use(redisSession);
app.use(cors({}));

const port = 7001;

app.get("/api", (_, res) => {
  console.log("scale work");
  return res.status(200).send("<h1>Docker express app works fine</h1>");
});

app.enable("trust proxy");
app.use("/api", bookRouter);
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server work on http://localhost:${port}`);
});
