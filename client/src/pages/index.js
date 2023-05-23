import { useSession } from "next-auth/react";
import Head from "next/head";
export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });
  console.log(session);
  return (
    <>
      <Head>
        <title>Inicio / Twitter</title>
      </Head>
      <div></div>
    </>
  );
}
