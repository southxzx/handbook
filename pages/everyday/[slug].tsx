import PostServices from "@/src/services/post";
import { IPost } from "@/src/types/post";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  post: IPost;
}

const EverydayDetailPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <p>hmm...looks like an error</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      {router.isFallback ? (
        <p>...loading</p>
      ) : (
        <div>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="mt-10">{post.content}</div>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || "";
  const post = PostServices.getPostBySlug(slug.toString());
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = PostServices.getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default EverydayDetailPage;
