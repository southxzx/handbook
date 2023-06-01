import PostServices from "@/src/services/post";
import { IPost } from "@/src/types/post";
import Link from "next/link";
import { NextPage } from "next/types";

interface Props {
  posts: IPost[];
}

const EverydayPage: NextPage<Props> = ({ posts = [] }) => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold">Everyday</h1>
      <p>Writing about what I learned everyday (but not everyday 😎)</p>
      <div className="mt-10">
        {posts.map((post) => (
          <Link href={`/everyday/${post.slug}`} key={post.title}>
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
