import { createAI, streamUI } from "ai/rsc";
import { createOpenAI, openai } from "@ai-sdk/openai";
import { ReactNode } from "react";

const SYSTEM_PROMPT = "Behave like google answer to users query";

// Define the AI state and UI state types
export type AIState = Array<{
  role: "user" | "assistant";
  content: string;
}>;

export type UIState = Array<{
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}>;

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

async function submitMessage(userInput) {
  "use server";

  try {
    const result = await streamUI({
      model: groq("llama3-8b-8192"),
      prompt: userInput.text,
      system: SYSTEM_PROMPT,
      text: ({ content }) => <p>{content}</p>,
      // tools: {
      //   get_city_weather: {
      //     description: "Get the current weather for a city",
      //     parameters: z
      //       .object({
      //         city: z.string().describe("the city"),
      //       })
      //       .required(),
      //     generate: async function* ({ city }) {
      //       yield <div>Loading...</div>;
      //       const weather = await getWeather(city);
      //       return <Weather info={weather} />;
      //     },
      //   },
      // },
    });

    return {
      id: Date.now(),
      role: "assistant",
      display: result.value,
    };
  } catch (err) {
    console.log(err);
    return {
      id: Date.now(),
      role: "assistant",
      display: "Error Something went wrong",
    };
  }
}

// Create the AI provider with the initial states and allowed actions
export const AI = createAI({
  initialAIState: [] as AIState,
  initialUIState: [] as UIState,
  actions: {
    submitMessage,
  },
});
