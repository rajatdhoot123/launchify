import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request) {
  const header_list = headers();

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  const redirect_origin =
    `https://${header_list.get("x-forwarded-host")}` || origin;
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_EXTENSION_SUPABASE_URL,
      process.env.NEXT_PUBLIC_EXTENSION_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name) {
            return cookieStore.get(name)?.value;
          },
          set(name, value, options) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name, options) {
            cookieStore.delete({ name, ...options });
          },
        },
      }
    );
    const { error, data } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(
        `${redirect_origin}/extension?access_token=${data.session.access_token}&refresh_token=${data.session.refresh_token}`
      );
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(
    `${redirect_origin}/extension/auth/auth-code-error`
  );
}
