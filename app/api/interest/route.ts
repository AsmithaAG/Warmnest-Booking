import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendAdminNotification, sendInterestMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const text = await req.text();
    console.log("RAW BODY:", text);

    const body = JSON.parse(text);
    const { name, email, phone, message } = body;

    // basic server-side validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("interests").insert({
      name,
      email,
      phone,
      message,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Database insert failed" },
        { status: 500 }
      );
    }

    try {
      await sendInterestMail(email, name);
    } catch (e) {
      console.error("Mail error:", e);
    }

    try {
      await sendAdminNotification({ name, email, phone, message });
    } catch (e) {
      console.error("Admin mail failed", e);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
