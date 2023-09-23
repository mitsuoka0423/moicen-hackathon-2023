import { Context } from "hono";

export const post = async (c: Context) => {
  const url = new URL(c.req.url);

  const requestBody = await c.req.json();
  console.log({ request: requestBody });

  const responseBody = {
    result: "ok",
    numberedTicket: {
      id: "R001",
      // imageUrl: `${url.origin}/1695452728.png`,
      imageUrl: `https://cvm9vgmd-3000.asse.devtunnels.ms/1695452728.png`,
    },
  };

  console.log({ response: responseBody });

  return c.json(responseBody);
};
