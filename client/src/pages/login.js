import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

export default function login() {
  const { data: session, status } = useSession();
  console.log(session, status);
  const router = useRouter();
  if (status === "loading") return <p>Loading...</p>;
  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <div className=" flex flex-col gap-10 mt-20">
      <button onClick={() => signIn("github")}> Signin whit github</button>
      <button onClick={() => signIn("google")}> Signin whit google</button>
      <button onClick={() => signIn("facebook")}> Signin whit google</button>

      <button onClick={() => signOut()}>Logout</button>
      <h1>Login</h1>
    </div>
  );
}
