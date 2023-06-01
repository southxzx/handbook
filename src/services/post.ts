import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { generateSlug } from "../utils/common";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[]) {
  const title = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${title}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };
  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "title") {
      items[field] = title;
    }
    if (field === "slug") {
      items[field] = generateSlug(title);
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

const PostServices = {
  getAllPosts: (fields: string[] = []) => {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug) => getPostBySlug(slug, fields));
    return posts;
  },
  getPostBySlug: (slug: string) => {
    const post = getPostBySlug(slug, ["title", "slug", "content"]);
    return post;
  },
};

export default PostServices;
