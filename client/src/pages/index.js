import { useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import TweetForm from "../components/TweetForm";
export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });
  const [base64, setBase64] = useState(""); // image that gets uploaded in new tweet
  const [profileImage, setProfileImage] = useState("/blank_pp.webp");
  const [text, setText] = useState("");
  return (
    <>
      <Head>
        <title>Inicio / Twitter</title>
      </Head>
      <TweetForm
        setText={setText}
        base64={base64}
        setBase64={setBase64}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />
      <div></div>
    </>
  );
}
