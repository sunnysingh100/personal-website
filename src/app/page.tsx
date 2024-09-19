import Intro from "@/components/Intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | Sunny Singh",
  description: "Home page of sunny singh",
};
function page() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  );
}

export default page;
