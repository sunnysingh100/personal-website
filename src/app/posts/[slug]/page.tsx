import { getPostBySlug, getPosts } from "@/lib/posts";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/mdx-content";
import siteMetadata from "@/lib/siteMetaData";

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => post.slug);
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { metadata } = post;

  const authors = metadata?.author ? [metadata.author] : siteMetadata.author;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: metadata.publishedAt,
      images: metadata.image,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.summary,
      images: metadata.image,
    },
  };
}
async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ""}
              className="object-cover"
              fill
              priority
              sizes="90vw"
            />
          </div>
        )}

        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? "")}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert md:prose-lg xl:prose-xl prose-code:text-base">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}

export default Post;
