// login.tsx
"use client";
import { postBasicLoginAPI } from "@/api/user/postBasicLoginAPI";
import { setCookie } from "@/api/cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabaseClient";

const Login = () => {
  const router = useRouter();

  // const handleLogin = async () => {
  //   try {
  //     const response = await postBasicLoginAPI();
  //     const expirationDate = new Date();
  //     expirationDate.setHours(expirationDate.getHours() + 1);
  //     setCookie("access", response.access_token, {
  //       expires: expirationDate,
  //       path: "/",
  //     });
  //     router.push("/home");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //임시

  interface Data {
    id: number;
    name: string;
    created_at: string;
  }
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const { data: user, error } = await supabase.from("USER").select("*");

      console.log(user);
      if (error) {
        console.error(error);
      } else {
        setData(user);
      }
    }

    fetchData();
  }, []);

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/signup`,
        // redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/home`,
      },
    });
  }

  return (
    <div>
      <button onClick={signInWithSpotify}>Login</button>
      <br />
      <br />
      {/* <button onClick={handleLogin}>기존Login</button> */}
    </div>
  );
};

export default Login;
