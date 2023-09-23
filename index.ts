import { Hono } from "hono";
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('/*', serveStatic({ root: './public' }))
app.get("/", (c) => c.text("Hono!!"));

export default app;
