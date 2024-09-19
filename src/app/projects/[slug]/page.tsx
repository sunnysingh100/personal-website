import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/mdx-content";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import siteMetadata from "@/lib/siteMetaData";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { metadata } = project;
  console.log(metadata);

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

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  const { title, image, author, publishedAt, deployedUrl } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Link href={deployedUrl || ""} target="_blank" rel="noreferrer">
              <Image
                src={image}
                alt={title || ""}
                className="object-cover"
                fill
              />
            </Link>
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
