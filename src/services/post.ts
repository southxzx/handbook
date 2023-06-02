import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { generateSlug } from "../utils/common";
const postsDirectory = join(process.cwd(), "_posts/everyday");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[]) {
  const formattedSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${formattedSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };
  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = generateSlug(formattedSlug);
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
    const post = getPostBySlug(slug, [
      "title",
      "slug",
      "content",
      "date",
      "tags",
    ]);
    return post;
  },
};

export default PostServices;
