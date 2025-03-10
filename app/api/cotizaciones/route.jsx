import { db } from "@/lib/db";
export async function GET() {
  const cotizaciones = await db.requisicion.findMany();
  return new Response(JSON.stringify(cotizaciones), { status: 200 });
}
