import {
  OPENAI_USER_PROMPT,
  OPENAI_USER_PROMPT_WITH_PREVIOUS_DESIGN,
  OPEN_AI_SYSTEM_PROMPT,
} from "@/app/constants__/prompt";

export async function codeGenerate({
  image,
  apiKey = process.env.OPEN_AI_KEY,
  text,
  // theme = "light",
  previousPreviews = [],
}: {
  image: string;
  apiKey: string;
  text: string;
  // theme?: string;
  previousPreviews;
}) {
  const messages: GPT4VCompletionRequest["messages"] = [
    {
      role: "system",
      content: OPEN_AI_SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: [],
    },
  ];

  const userContent = messages[1].content as Exclude<MessageContent, string>;

  // Add the image
  userContent.push({
    type: "text",
    text:
      previousPreviews.length > 0
        ? OPENAI_USER_PROMPT_WITH_PREVIOUS_DESIGN
        : OPENAI_USER_PROMPT,
  });

  // Add the strings of text
  if (text) {
    userContent.push({
      type: "text",
      text: `Here's a list of text that we found in the design:\n${text}`,
    });
  } else {
    userContent.push({
      type: "text",
      text: `There wasn't any text in this design. You'll have to work from just the images.`,
    });
  }

  // Add the previous previews as HTML
  for (let i = 0; i < previousPreviews.length; i++) {
    const preview = previousPreviews[i];
    userContent.push(
      {
        type: "text",
        text: `The html also included one of your previous result`,
      },
      {
        type: "text",
        text: `And here's the HTML you came up with for it: ${preview.html}`,
      }
    );
  }

  // // Prompt the theme
  // userContent.push({
  //   type: "text",
  //   text: `Please make your result use the ${theme} theme.`,
  // });

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
