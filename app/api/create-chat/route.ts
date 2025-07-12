import { auth } from "@clerk/nextjs/server";
import { createChat } from "@/db";

export async function POST(req: Request) {
  const { title, model } = await req.json();
  const { userId } = await auth();
  if (userId) {
    const newChat = await createChat(title, userId, model);
    return new Response(JSON.stringify({ id: newChat?.id }), { status: 200 });
  }
  return new Response(null, { status: 200 });
}
