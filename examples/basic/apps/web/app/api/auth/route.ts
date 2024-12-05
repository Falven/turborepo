import { NextResponse } from "next/server";

import { multiply } from "@repo/lib";

export async function GET() {
  return NextResponse.json({ result: multiply(3, 2) }, { status: 200 });
}
