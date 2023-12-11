import { OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING } from "@/app/constants__/prompt";

export async function updateCopywriting({
  jsx_code,
  use_case,
  apiKey = process.env.OPEN_AI_KEY,
}: {
  use_case: string;
  apiKey: string;
  jsx_code: string;
  // theme?: string;
}) {
  const messages: GPT4VCompletionRequest["messages"] = [
    {
      role: "system",
      content: OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING,
    },
    {
      role: "user",
      content: [],
    },
  ];

  const userContent = messages[1].content as Exclude<MessageContent, string>;

  // Add the strings of text

  userContent.push({
    type: "text",
    text: `Update copy wiring with this use case: ${use_case}`,
  });

  userContent.push({
    type: "text",
    text: `JSX code with default copy writing: ${jsx_code}`,
  });

  const body: GPT4VCompletionRequest = {
    model: "gpt-4-1106-preview",
    max_tokens: 4096,
    temperature: 0,
    messages,
  };

  let json = null;

  try {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });
    json = await resp.json();
  } catch (e) {
    return { error: e.message };
  }

  return json;
}

type MessageContent =
  | string
  | (
      | string
      | {
          type: "image_url";
          image_url:
            | string
            | {
                url: string;
                detail: "low" | "high" | "auto";
              };
        }
      | {
          type: "text";
          text: string;
        }
    )[];

export type GPT4VCompletionRequest = {
  model: "gpt-4-vision-preview" | "gpt-4" | "gpt-4-1106-preview";
  messages: {
    role: "system" | "user" | "assistant" | "function";
    content: MessageContent;
    name?: string | undefined;
  }[];
  functions?: any[] | undefined;
  function_call?: any | undefined;
  stream?: boolean | undefined;
  temperature?: number | undefined;
  top_p?: number | undefined;
  max_tokens?: number | undefined;
  n?: number | undefined;
  best_of?: number | undefined;
  frequency_penalty?: number | undefined;
  presence_penalty?: number | undefined;
  logit_bias?:
    | {
        [x: string]: number;
      }
    | undefined;
  stop?: (string[] | string) | undefined;
};
