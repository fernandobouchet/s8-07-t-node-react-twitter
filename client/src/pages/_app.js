import "@/styles/globals.css";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loadingDarkMode, setLoadingDarkMode] = useState(true);
  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = "light";
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add(localStorage.theme);
    }
    setLoadingDarkMode(false);
  }, []);
  if (loadingDarkMode) {
    return undefined;
  }

  return (
    <>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
