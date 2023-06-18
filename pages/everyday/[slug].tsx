import hljs from "highlight.js";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import BackButton from "@/src/components/BackButton";
import PostServices from "@/src/services/post";
import { IPost } from "@/src/types/post";
import markDownToHtml from "@/src/utils/markDownToHtml";
import { CLIENT_URL } from "@/src/utils/constant";

interface Props {
  post: IPost;
  content: string;
}

const EverydayDetailPage: NextPage<Props> = ({ post, content }) => {
  const router = useRouter();
  const { title, date, tags = [], slug } = post;

  const excerpt =
    content.substring(0, 100).replace(/(<([^>]+)>)/gi, "") + "...";
  const url = `${CLIENT_URL}/everyday/${slug}`;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  if (!router.isFallback && !post.slug) {
    return <p>hmm...looks like an error</p>;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/harmonic16-light.min.css"
        />
        <title>{date + " - " + title}</title>
        <meta name="description" content={excerpt}></meta>
        <meta property="og:title" content={date + " - " + title}></meta>
        <meta property="og:description" content={excerpt}></meta>
        <meta property="og:url" content={url}></meta>
      </Head>
      <div className="content-detail mb-10">
        {router.isFallback ? (
          <p>...loading</p>
        ) : (
          <div>
            <BackButton />
            <h1 className="text-4xl font-medium mb-3">{title}</h1>
            <span className="text-grey font-light text-sm">🕑 {date}</span>
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
                  className="text-grey !text-sm font-light mr-2 bg-extraLight p-1 px-2 rounded"
                >
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
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
