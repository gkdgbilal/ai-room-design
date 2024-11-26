import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { user } = await req.json();

  try {
    // If user already exist

    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

    if (!userInfo?.length) {
      const saveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        })
        // .returning({ Users });
        .returning({
          name: Users.name,
          email: Users.email,
          imageUrl: Users.imageUrl,
        });

      return NextResponse.json({ result: saveResult[0] });
    }

    return NextResponse.json({ result: userInfo[0] });
    // If not will add new user to db
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
  }

  return NextResponse.json({ result: user });
}
