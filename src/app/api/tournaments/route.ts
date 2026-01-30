import { NextResponse } from "next/server";
import { tournaments } from "@/data/tournaments";

export async function GET() {
  return NextResponse.json(tournaments);
}
