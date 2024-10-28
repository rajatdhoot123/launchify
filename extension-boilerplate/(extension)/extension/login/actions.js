"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData) {
  const header = headers();

  const origin = header.get("origin");

  const supabase = createClient();

  const form_data = {
    source: formData.get("source"),
  };

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        source: form_data.source,
      },
      redirectTo:
        form_data.source === "extension"
          ? `${origin}/extension/auth/callback/extension`
          : `${origin}/extension/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  } else {
    redirect(data.url);
  }
}

export async function signup(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
