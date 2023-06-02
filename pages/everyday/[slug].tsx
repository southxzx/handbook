import BackButton from "@/src/components/BackButton";
import PostServices from "@/src/services/post";
import { IPost } from "@/src/types/post";
import markDownToHtml from "@/src/utils/markDownToHtml";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  post: IPost;
  content: string;
}

const EverydayDetailPage: NextPage<Props> = ({ post, content }) => {
  const router = useRouter();
  const { title, date, tags = [] } = post;

  if (!router.isFallback && !post.slug) {
    return <p>hmm...looks like an error</p>;
  }

  return (
    <div>
      {router.isFallback ? (
        <p>...loading</p>
      ) : (
        <div>
          <BackButton />
          <h1 className="text-4xl font-medium mb-2">{title}</h1>
          <span className="text-grey font-light pt-2">🕑 {date}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
            className="text-xl text-black font-light mt-5"
          />
          <div className="flex items-center mt-5">
            {tags?.map((tag) => (
              <p
                key={tag}
                className="text-grey text-sm font-light mr-2 bg-extraLight px-1 rounded"
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || "";
  const post = PostServices.getPostBySlug(slug.toString());
  const content = await markDownToHtml(post.content || "");
  return {
    props: {
      post,
      content,
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
