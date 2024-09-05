import Link from "next/link";
import { getPosts } from "@/lib/posts";
import AllPosts from "./allposts";

export default async function RecentPosts() {
  const posts = await getPosts(4);

  return (
    <section className="pb-24">
      <div>
        <h2 className="title mb-12">Recent posts</h2>
        <AllPosts posts={posts} />

        <Link
          href="/posts"
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
        >
          <span className="text-lg font-bold">All posts</span>
        </Link>
      </div>
    </section>
  );
}
