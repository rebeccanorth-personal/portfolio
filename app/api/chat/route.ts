import Anthropic from "@anthropic-ai/sdk";
import { chatSystemPrompt } from "@/lib/content";

const client = new Anthropic();

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system: chatSystemPrompt,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const content =
    response.content[0].type === "text" ? response.content[0].text : "";

  return Response.json({ content });
}
