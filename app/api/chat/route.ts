
import OpenAI from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {

    const body = await req.json();

console.log("ROUTE V2 ATTIVA");

console.log("ROUTE V2 ATTIVA");

return NextResponse.json({
  reply: "ROUTE V2 ATTIVA",
});

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Errore AI",
      },
      {
        status: 500,
      }
    );
  }
}
```
