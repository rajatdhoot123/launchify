import { createAI, streamUI } from "ai/rsc";
import { createOpenAI, openai } from "@ai-sdk/openai";
import { ReactNode } from "react";

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

  console.log("userInput", userInput);
  const result = await streamUI({
    model: groq("llama3-70b-8192"),
    prompt: `
---
**Title:** ${userInput.title}

**Subtitle:** ${userInput.subTitle}

**Keywords:** ${userInput.keywords}

### Blog Post Outline:

1. **Introduction**
   - Start with a captivating hook using the title and subtitle.
   - Include a thought-provoking question, relatable anecdote, or surprising statistic.
   - Introduce the topic and set the stage for the reader.

2. **Content Structure**
   - Organize the main content into logical sections with clear subheadings.
   - Ensure each section covers a specific aspect of the topic.

3. **Human Touch**
   - Maintain a conversational tone, avoiding overly formal language.
   - Offer valuable insights, practical advice, or unique perspectives.
   - Use real-world examples, case studies, or data for illustration.

4. **Credibility**
   - Cite credible sources to support arguments.
   - Address potential reader questions.

5. **Conclusion**
   - Summarize key takeaways.
   - Include a clear call to action for further engagement.

### Additional Considerations:
   - Tailor the language, tone, and content length to suit the target audience.
   - Incorporate relevant visual elements like images or infographics.
   - Integrate keywords naturally for SEO.

---

**Markdown Output:**

# ${userInput.title}

## ${userInput.subTitle}

### Introduction

- Begin with a captivating introduction using the title and subtitle.
- [Include thought-provoking content here]

### Section 1: [First Subheading]

- [Content related to first subheading]

### Section 2: [Second Subheading]

- [Content related to second subheading]

### Human Touch

- [Conversational insights, practical advice, unique perspectives, examples]

### Credibility

- [Cite credible sources, address reader questions]

### Conclusion

- Summarize key takeaways.
- Call to action.

### Visual Elements

- [Incorporate relevant images or infographics]

### SEO

- [Integrate keywords naturally]
    `,
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
}

// Create the AI provider with the initial states and allowed actions
export const AI = createAI({
  initialAIState: [] as AIState,
  initialUIState: [] as UIState,
  actions: {
    submitMessage,
  },
});
