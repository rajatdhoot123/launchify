import { OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING } from "@/app/constants__/prompt";

export async function updateCopywriting({
  jsx_code,
  use_case,
  apiKey = process.env.OPEN_AI_KEY,
}: {
  use_case: string;
  apiKey: string;
  jsx_code: string;
}) {
  const messages: GPT4VCompletionRequest["messages"] = [
    {
      role: "system",
      content: OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING,
    },
  ];

  // const userContent = messages[1].content as Exclude<MessageContent, string>;

  // Add the strings of text

  messages.push({
    role: "assistant",
    content: `JSX code with default copy writing: ${jsx_code}`,
  });

  messages.push({
    role: "user",
    content: `Update copy writing with this use case: ${use_case}`,
  });

  const body: GPT4VCompletionRequest = {
    model: "llama3-70b-8192",
    max_tokens: 4096,
    temperature: 0,
    messages,
  };

  let json = null;

  try {
    const resp = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );
    json = await resp.json();
  } catch (e) {
    console.log(e);
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
  response_format?: {
    type: "json_object";
  };
  model:
    | "gpt-4-vision-preview"
    | "gpt-4"
    | "gpt-4-1106-preview"
    | "mixtral-8x7b-32768"
    | "llama3-70b-8192"
    | "llama2-70b-4096";
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
