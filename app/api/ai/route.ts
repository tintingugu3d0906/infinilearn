import { NextResponse } from "next/server";
import { askOpenAI } from "@/lib/openai";

export async function POST(req: Request) {
  const { message, user } = await req.json();

  const response = await askOpenAI(message, user);

  return NextResponse.json({ response });
}
