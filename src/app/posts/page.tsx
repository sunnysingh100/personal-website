import React from "react";
import AllPosts from "@/components/allposts";
import { getPosts } from "@/lib/posts";

async function Posts() {
  const posts = await getPosts();

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Posts</h1>
        <AllPosts posts={posts} />
      </div>
    </section>
  );
}

export default Posts;
