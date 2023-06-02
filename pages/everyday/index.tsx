import BackButton from "@/src/components/BackButton";
import PostServices from "@/src/services/post";
import { IPost } from "@/src/types/post";
import Link from "next/link";
import { NextPage } from "next/types";

interface Props {
  posts: IPost[];
}

const EverydayPage: NextPage<Props> = ({ posts = [] }) => {
  return (
    <div>
      <BackButton />
      <h1 className="text-4xl font-medium">📕 Everyday</h1>
      <p className="text-xl text-grey font-light mt-5">
        Writing about what I learned everyday (but not everyday 😎)
      </p>
      <div className="mt-12">
        <p className="text-neutral font-light mb-2">Posts:</p>
        {posts.map((post) => (
          <Link
            href={`/everyday/${post.slug}`}
            key={post.slug}
            className="text-lg hover:text-neutral"
          >
            <span className="text-grey font-light">{post.date}</span>
            &nbsp;-&nbsp;
            {post.title}
          </Link>
        ))}
      </div>
    </div>
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
