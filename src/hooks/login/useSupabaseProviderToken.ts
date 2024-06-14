import { supabase } from "@/lib/supabase/supabaseClient";
import { useEffect } from "react";

// https://supabase.com/docs/reference/javascript/auth-onauthstatechange
// supabase의 provider_token(spotify와의 통신)을 관리하는 hook

const useSupabaseProviderToken  = () => {
  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (session && session.provider_token) {
        window.localStorage.setItem(
          "oauth_provider_token",
          session.provider_token
        );
      }

      if (session && session.provider_refresh_token) {
        window.localStorage.setItem(
          "oauth_provider_refresh_token",
          session.provider_refresh_token
        );
      }

      if (event === "SIGNED_OUT") {
        window.localStorage.removeItem("oauth_provider_token");
        window.localStorage.removeItem("oauth_provider_refresh_token");
      }
    });
    return () => {
      authListener.data.subscription.unsubscribe;
    };
  }, []);
};

export default useSupabaseProviderToken 