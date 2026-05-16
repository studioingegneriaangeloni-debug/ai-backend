import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: body.message,
    });

    return NextResponse.json({
      reply: response.output_text,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Errore AI" },
      { status: 500 }
    );
  }
}