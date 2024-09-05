import path from "path";
import * as fs from "fs";
import matter from "gray-matter";

const rootdirectory = path.join(process.cwd(), "content/posts");

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootdirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    return null;
  }
}
