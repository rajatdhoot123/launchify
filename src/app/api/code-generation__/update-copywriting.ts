import { OPEN_AI_SYSTEM_PROMPT_UPDATE_COPY_WRITING } from "@/app/constants__/prompt";
import { z } from "zod";
import { ChatGroq } from "@langchain/groq";
import { RunnableSequence } from "@langchain/core/runnables";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    jsx_code: z
      .string()
      .describe(
        "The JSX code with updated copywriting enclosed in a ```jsx\n...\n``` block"
      ),
  })
);

export const updateCopywriting = async ({
  use_case,
  jsx_code,
  apiKey = "",
}) => {
  const model = new ChatGroq({
    model: "llama3-70b-8192",
    temperature: 0,
    apiKey: apiKey || process.env.GROQ_API_KEY,
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
