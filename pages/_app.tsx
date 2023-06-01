import { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
