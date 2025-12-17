import { RedisStore } from "connect-redis";
import session from "express-session";
import { createClient } from "redis";
import { REDIS_URL, SESSION_SECRET } from "./config.js";

let redisClient = createClient({ url: REDIS_URL });
await redisClient
  .connect()
  .then(() => console.log("Redis started"))
  .catch(console.error);

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "docker-express-app:",
});

const redisSession = session({
  store: redisStore,
  secret: SESSION_SECRET,
  cookie: {
    secure: false,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    maxAge: 40000,
  },
});

export default redisSession;
