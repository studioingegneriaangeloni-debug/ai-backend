
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

    const promptPath = path.join(
      process.cwd(),
      "app",
      "prompts",
      "eap-system-v1.md"
    );

    const systemPrompt =
      fs.readFileSync(promptPath, "utf8");

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions: systemPrompt,
      input: body.message,
    });

    return NextResponse.json({
      reply: response.output_text,
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
