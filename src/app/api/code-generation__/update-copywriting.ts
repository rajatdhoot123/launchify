import { OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING } from "@/app/constants__/prompt";
import { z } from "zod";
import { ChatGroq } from "@langchain/groq";
import { RunnableSequence } from "@langchain/core/runnables";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    jsx_code: z
      .string()
      .describe(
        "The JSX code with updated copywriting enclosed in a ```jsx\n...\n``` block"
      ),
  })
);

const updateCopywritingWithGroq = async ({
  use_case,
  jsx_code,
  groq_ai_key = "",
}) => {
  const model = new ChatGroq({
    model: "llama3-70b-8192",
    temperature: 0,
    apiKey: groq_ai_key,
  });

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING),
    model,
  ]);

  const response = await chain.invoke({
    use_case: use_case,
    jsx_code: jsx_code,
  });

  return response.content;
};

const updateCopywritingWithOpenAi = async ({
  use_case,
  jsx_code,
  open_ai_key = "",
}) => {
  const model = new ChatOpenAI({
    model: "gpt-4-turbo",
    temperature: 0,
    apiKey: open_ai_key,
  });

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING),
    model,
  ]);

  const response = await chain.invoke({
    use_case: use_case,
    jsx_code: jsx_code,
  });

  return response.content;
};

export const updateCopywriting = async ({
  use_case,
  jsx_code,
  groq_ai_key,
  open_ai_key,
}) => {
  if (open_ai_key) {
    return await updateCopywritingWithOpenAi({
      use_case,
      jsx_code,
      open_ai_key,
    });
  } else if (groq_ai_key) {
    return await updateCopywritingWithGroq({
      use_case,
      jsx_code,
      groq_ai_key,
    });
  }
};
