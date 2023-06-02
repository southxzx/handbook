import { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import "../styles/globals.css";
import "../styles/blinkingTextCursor.css";

import Layout from "@/src/components/Layout";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      {/* <div className="min-h-screen flex flex-col justify-between">
        <div className="container mx-auto pt-10">
          <div className="max-w-screen-sm mx-auto">
            {<Component {...pageProps} />}
          </div>
        </div>
        <div className="mt-auto bg-extraLight p-3">
          <div className="max-w-screen-sm flex items-center justify-between mx-auto font-light text-sm text-grey">
            <p>@southxzx</p>
            <p>2023</p>
          </div>
        </div>
      </div> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
