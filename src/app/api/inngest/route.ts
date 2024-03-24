import { inngest } from "@/inngest/client";
import { create_zip } from "@/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
const RESPONSE = serve({
  client: inngest,
  functions: [create_zip],
});

const { POST, GET, PUT } = RESPONSE;
export { POST, GET, PUT };
