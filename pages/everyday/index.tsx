import BackButton from "@/src/components/BackButton";
import PostServices from "@/src/services/post";
import { IPost } from "@/src/types/post";
import { CLIENT_URL } from "@/src/utils/constant";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next/types";

interface Props {
  posts: IPost[];
}

const EverydayPage: NextPage<Props> = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>Everyday</title>
        <meta
          name="description"
          content="Writing about what I learned everyday (but not everyday 😎)"
        ></meta>
        <meta property="og:title" content="Everyday"></meta>
        <meta
          property="og:description"
          content="Writing about what I learned everyday (but not everyday 😎)"
        ></meta>
        <meta property="og:url" content={`${CLIENT_URL + "/everyday"}`}></meta>
      </Head>
      <div>
        <BackButton />
        <h1 className="text-4xl font-medium">📕 Everyday</h1>
        <p className="text-xl text-grey font-light mt-5">
          Writing about what I learned everyday (but not everyday 😎)
        </p>
        <div className="mt-12">
          <p className="text-neutral font-light mb-2">All posts:</p>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                href={`/everyday/${post.slug}`}
                className="text-lg hover:text-neutral"
              >
                <span className="text-grey font-light">{post.date}</span>
                &nbsp;-&nbsp;
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = PostServices.getAllPosts(["title", "date", "slug"]);
  return {
    props: {
      posts,
    },
  };
};

export default EverydayPage;
