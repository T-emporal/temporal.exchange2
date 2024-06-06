import { NextRequest, NextResponse } from 'next/server';
import { google } from "googleapis";
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

export async function POST(req: NextRequest) {
  try {
    const { name, level, discordHandle, telegramHandle, company, email } = await req.json() as RequestBody;

    if (!name || !level) {
      return NextResponse.json({ message: "Name and level are required." }, { status: 400 });
    }

    if (level === 'Yield Farmer' && (!discordHandle || !telegramHandle)) {
      return NextResponse.json({ message: "Discord and Telegram handles are required for Yield Farmer." }, { status: 400 });
    }

    if ((level === 'Professional Trader' || level === 'Institution / Ecosystem') && (!company || !email)) {
      return NextResponse.json({ message: "Company and Email are required for Professional Trader and Institution / Ecosystem." }, { status: 400 });
    }

    await appendToSheet({ name, level, discordHandle, telegramHandle, company, email });
    return NextResponse.json({ message: "Data added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error appending to the sheet:", error);
    return NextResponse.json({ message: "Failed to add data to the sheet" }, { status: 500 });
  }
}

export const GET = () => {
  return NextResponse.json({ message: `Method Not Allowed` }, { status: 405 });
};
