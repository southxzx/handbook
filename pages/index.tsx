import BlinkingTextCursor from "@/src/components/BlinkingTextCursor";
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
        "Writing about what I learned everyday (but not everyday 😎)",
      href: "/everyday",
    },
    // {
    //   key: "about",
    //   text: "👨🏼‍💻 About",
    //   description: "Get to know me",
    //   href: "/about",
    // },
  ];

  const socials = [
    {
      key: "github",
      text: "Github",
      href: "",
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
      href: "",
      icon: (
        <Image
          src="/icons/social/linkedin.svg"
          width={24}
          height={24}
          alt="Linkedin"
        />
      ),
    },
    {
      key: "twitter",
      text: "Twitter",
      href: "",
      icon: (
        <Image
          src="/icons/social/twitter.svg"
          width={24}
          height={24}
          alt="Twitter"
        />
      ),
    },
  ];

  return (
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
          <h1 className="text-4xl font-medium">southxzx</h1>
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
              <p className="ml-6 text-grey font-light">{section.description}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center">
        {socials.map((social) => (
          <div className="mr-2" key={social.key}>
            <Link href={social.href}>{social.icon}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  };
};
