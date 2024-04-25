import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";
import type { sheets_v4 } from "googleapis";

interface SuccessResponse {
  message: string;
}

interface ErrorResponse {
  message: string;
}

interface RequestBody {
  name: string;
  level?: string;
  discordHandle?: string;
  telegramHandle?: string;
  company?: string;
  email?: string;
}

interface GoogleCredentials {
  type?: string;
  project_id?: string;
  private_key_id?: string;
  private_key?: string;
  client_email?: string;
  client_id?: string;
  auth_uri?: string;
  token_uri?: string;
  auth_provider_x509_cert_url?: string;
  client_x509_cert_url?: string;
}

async function appendToSheet(
  body: RequestBody
): Promise<sheets_v4.Schema$AppendValuesResponse> {
  if (!process.env.GOOGLE_SERVICE_KEY) {
    throw new Error("GOOGLE_SERVICE_KEY environment variable is not set.");
  }

  const decodedKey = Buffer.from(
    process.env.GOOGLE_SERVICE_KEY,
    "base64"
  ).toString();
  const credentials = JSON.parse(decodedKey) as GoogleCredentials;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      client_id: credentials.client_id,
      private_key: credentials.private_key,
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({ auth, version: "v4" });

  const sheetName = body.telegramHandle && body.discordHandle ? 'Sheet1' : 'Professionals';
  const range = `${sheetName}!A2`;
  const values = body.telegramHandle && body.discordHandle
    ? [[body.discordHandle, body.telegramHandle]]
    : [[body.name, body.company, body.email]];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.DATABASE_ID,
    range: range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });

  return response.data;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method ?? "UNKNOWN"} Not Allowed` });
    return;
  }

  const { name, level, discordHandle, telegramHandle, company, email } = req.body as RequestBody;

  if (!name || !level) {
    res.status(400).json({ message: "Name and level are required." });
    return;
  }

  if (level === 'Yield Farmer' && (!discordHandle || !telegramHandle)) {
    res.status(400).json({ message: "Discord and Telegram handles are required for Yield Farmer." });
    return;
  }

  if ((level === 'Professional Trader' || level === 'Institution / Ecosystem') && (!company || !email)) {
    res.status(400).json({ message: "Company and Email are required for Professional Trader and Institution / Ecosystem." });
    return;
  }

  try {
    await appendToSheet({ name, level, discordHandle, telegramHandle, company, email });
    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    console.error("Error appending to the sheet:", error);
    res.status(500).json({ message: "Failed to add data to the sheet" });
  }
};

export default handler;