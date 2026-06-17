import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In production: connect to Resend, SendGrid, or CRM webhook
    console.log("Quote request received:", body);
    return NextResponse.json({ success: true, message: "Quote received" }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
