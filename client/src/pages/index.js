import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session, status);
  if (status === "loading") return <p>Loading...</p>;
  /*  if (status === "unauthenticated") {
    router.push("login");
  } */
  return (
    <div>
      {session ? (
        <>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <>
          <p>Usuario no logueado</p>
        </>
      )}
      <h1>Futuro clon de Twitter</h1>
    </div>
  );
}
