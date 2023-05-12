import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function profile() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      {session && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl">
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
