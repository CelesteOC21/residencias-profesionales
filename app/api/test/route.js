import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const usersCount = await db.usuario.count();

  // Do whatever you want
  return NextResponse.json({ usersCount }, { status: 200 });
}
