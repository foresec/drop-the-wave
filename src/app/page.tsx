// login.tsx
"use client";
import { postBasicLoginAPI } from "@/api/user/postBasicLoginAPI";
import { setCookie } from "@/api/cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await postBasicLoginAPI();
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 1);
      setCookie("access", response.access_token, {
        expires: expirationDate,
        path: "/",
      });
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
