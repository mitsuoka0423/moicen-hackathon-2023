import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { serveStatic } from "hono/bun";

import { post } from "./routes/reservation.js";

const app = new Hono();

app.use("*", logger());
app.use("*", prettyJSON());
app.get("/*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.text("Hono!!"));
app.post("/reservation", post);

export default app;
