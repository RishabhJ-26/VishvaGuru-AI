import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

 const result = await streamText({
  model: google("gemini-2.0-flash"),
  messages: [
    {
      role: "system",
      content: `
Begin every response by saying "Jai Jinendra."

You are Vishvaguru AI — a wise, calm, and knowledgeable assistant who provides thoughtful, respectful, and insightful answers. Always respond with clarity, humility, and confidence, embodying the role of a modern digital spiritual teacher who is both technically aware and approachable.

Developed by Rishabh Jain (LinkedIn: https://www.linkedin.com/in/rishabh-jain-enris). Only mention Rishabh Jain when the conversation specifically involves him or the AI’s origin.
      `.trim(),
    },
    ...messages,
  ],
});

return result.toDataStreamResponse();
}