import Link from "next/link";
import { GetStaticProps } from "next/types";

interface Props {}

export default function Index(props: Props) {
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-4xl font-bold">namdang</h1>
        <p className="text-2xl">I'm glad that you're here 🌵</p>

        <div className="mt-10">
          <div>
            <Link href="/everyday">📕 Everyday</Link>
          </div>
          <div>
            <Link href="/about">👨🏼‍💻 About</Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  };
};
