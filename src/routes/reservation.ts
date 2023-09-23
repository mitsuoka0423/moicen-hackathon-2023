import { Context } from "hono";

import { sheet } from "../databases/sheet.js";
import { Patient } from "../domains/Patient.js";

interface ReservationRequest {
  patientInfo: Patient;
}

export const post = async (c: Context) => {
  const requestBody = await c.req.json() as ReservationRequest;
  console.log({ request: requestBody });  

  const reservation = await sheet.post({
    name: requestBody.patientInfo.name,
    nameKana: requestBody.patientInfo.nameKana,
    tel: requestBody.patientInfo.tel,
  });

  const responseBody = {
    result: "ok",
    numberedTicket: {
      id: reservation.issuedNumber,
      imageUrl: `${Bun.env.ORIGIN}/${reservation.issuedNumber}.png`,
    },
  };

  console.log({ response: responseBody });

  return c.json(responseBody);
};
