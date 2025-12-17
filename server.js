import express from "express";

const app = express();
import "./config/db.js";

import bookRouter from "./routers/bookRouter.js";
import userRouter from "./routers/userRouter.js";

import redisSession from "./config/redis.js";

app.use(express.json());
app.use(redisSession);

const port = 7001;

app.get("/", (_, res) => {
  return res.status(200).send("<h1>Docker express app works fine</h1>");
});

app.use(bookRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server work on http://localhost:${port}`);
});
