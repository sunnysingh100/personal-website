import React from "react";
import { getPosts } from "@/lib/posts";
import PostsWithSearch from "@/components/post-with-search";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "All Posts",
  description: "All posts of sunny singh",
};

async function Posts() {
  const posts = await getPosts();

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  );
}

export default Posts;
