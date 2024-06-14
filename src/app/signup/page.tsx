"use client";

import useSupabaseProviderToken from "@/hooks/login/useSupabaseProviderToken";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 1.

export default function SingUpPage() {
  // auth
	useSupabaseProviderToken()

  const router = useRouter();

  const goToHome = () => {
    router.push("/home");
  };

  // auth정보 받아오는거까지 성공

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      console.log(user);
      console.log(error);
    }

    getUser();
  }, []);

  return (
    <div>
      <h1>SignUp</h1>
      <button onClick={goToHome}>to Home</button>
    </div>
  );
}
