import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function login() {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className=" flex flex-col gap-10 mt-20">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        onClick={() => signIn("github")}
      >
        {" "}
        Signin whit github
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        onClick={() => signIn("google", { callbackUrl: '/home' })}
      >
        {" "}
        Signin whit google
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        onClick={() => signIn("facebook")}
      >
        {" "}
        Signin whit google
      </button>

      <button
        onClick={() => signOut()}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
}
