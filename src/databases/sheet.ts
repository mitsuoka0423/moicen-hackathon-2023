interface SheetRequest {
  name: string;
  nameKana: string;
  tel: string;
}

interface SheetResponse {
  issuedNumber: string;
}

if (!Bun.env.SHEET_URL) {
  throw new Error("SHEET_URL is required");
}
const sheetUrl = Bun.env.SHEET_URL as string;

export const sheet = {
  post: async (props: SheetRequest): Promise<SheetResponse> => {
    console.log({props});
    
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
  
    if (!response.ok) {
      throw new Error("Failed to post to Google Sheet");
    }
  
    return response.json();
  },
};