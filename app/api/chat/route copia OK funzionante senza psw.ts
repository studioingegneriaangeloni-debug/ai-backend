import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: body.message,
    });

    return NextResponse.json(
      {
        reply: response.output_text,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Errore AI",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}