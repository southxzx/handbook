import BlinkingTextCursor from "@/src/components/BlinkingTextCursor";
import { CLIENT_URL } from "@/src/utils/constant";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next/types";

interface Props {}

export default function Index(props: Props) {
  const sections = [
    {
      key: "everyday",
      text: "📕 Everyday Learning",
      description:
        "Documenting my daily learning experiences (though not on a daily basis 😎)",
      href: "/everyday",
    },
    {
      key: "worlds-within-frames",
      text: "📸 Worlds Within Frames",
      description:
        "Posting some pictures that I took, mostly about my life in Vietnam (coming soon)",
      href: "",
    },
    {
      key: "about",
      text: "👨🏼‍💻 About",
      description: "Get to know me",
      href: "/about",
    },
  ];

  const socials = [
    {
      key: "github",
      text: "Github",
      href: "https://github.com/southxzx",
      icon: (
        <Image
          src="/icons/social/github.svg"
          width={24}
          height={24}
          alt="Github"
        />
      ),
    },
    {
      key: "linkedin",
      text: "Linkedin",
      href: "https://www.linkedin.com/in/southxzx/",
      icon: (
        <Image
          src="/icons/social/linkedin.svg"
          width={24}
          height={24}
          alt="Linkedin"
        />
      ),
    },
    // {
    //   key: "twitter",
    //   text: "Twitter",
    //   href: "",
    //   icon: (
    //     <Image
    //       src="/icons/social/twitter.svg"
    //       width={24}
    //       height={24}
    //       alt="Twitter"
    //     />
    //   ),
    // },
  ];

  return (
    <>
      <Head>
        <title>Handbook</title>
        <meta
          name="description"
          content="My name is Nam, I'm glad that you found me here."
        ></meta>
        <meta property="og:title" content="Handbook"></meta>
        <meta
          property="og:description"
          content="My name is Nam, I'm glad that you found me here."
        ></meta>
        <meta property="og:url" content={CLIENT_URL}></meta>
      </Head>
      <div>
        <div className="flex items-center">
          <Image
            src="/images/avt_2023.jpg"
            width={48}
            height={48}
            alt="profile-picture"
            className="rounded-full mr-3"
          />
          <div>
            <h1 className="text-4xl font-medium colorized">southxzx</h1>
          </div>
        </div>

        <p className="text-xl text-neutral font-light mt-5">
          My name is Nam, I&apos;m glad that you found me here.
        </p>
        <BlinkingTextCursor />

        <div className="mt-10">
          {sections.map((section) => (
            <div key={section.key} className="mb-3">
              <Link href={section.href}>
                <p className="text-lg hover:text-neutral">{section.text}</p>
                <p className="ml-6 text-grey font-light">
                  {section.description}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center">
          {socials.map((social) => (
            <div className="mr-2" key={social.key}>
              <Link href={social.href} target="_blank" rel="nofollow">
                {social.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  };
};
