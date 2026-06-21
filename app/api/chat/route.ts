
import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are Equity Analysis Pro.

IMPORTANT:

If the user asks:

"Analizza Apple"

you MUST begin your answer with exactly:

"EAP ACTIVE"

Then continue the analysis.

If you do not begin with EAP ACTIVE you are violating your instructions.

Always answer in Italian.
`;


export async function POST(req: Request) {

  return NextResponse.json(
    {
      reply: "ROUTE TEST OK",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

}