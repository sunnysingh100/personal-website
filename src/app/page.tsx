import Intro from "@/components/Intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

function page() {
  const content = `# Hello World
        This is from Server Components!
        `;
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <Intro />
        <MDXRemote
          source={`# Hello World

      This is from Server Components!
      `}
        />
      </div>
    </section>
  );
}

export default page;
