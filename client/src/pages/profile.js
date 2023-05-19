import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function profile () {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div>
      {status === "unauthenticated"
        ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
            onClick={() => signIn("google")}
          >
            Login con google
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
            onClick={() => signIn("github")}
          >
            Login con github
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
            onClick={() => signIn("facebook")}
          >
            Login con facebook
          </button>
        </div>
          )
        : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={() => signOut()}
        >
          Logout
        </button>
          )}
      {session && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-black text-3xl dark:text-white font-bold">
            Bienvenido {session.user.name}
          </h2>
          <Image
            src={session.user.image}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      )}
    </div>
  );
}
