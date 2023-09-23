import { Context } from "hono";

export const post = (c: Context) => {
  const url = new URL(c.req.url);

  return c.json({
    result: "ok",
    numberedTicket: {
      id: "R001",
      imageUrl: `${url.origin}/1695452728.png`,
    },
  });
};
