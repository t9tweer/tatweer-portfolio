import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import { notFound } from "next/navigation";

const query = `
  *[_type == "project" && slug.current == $slug][0]{
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl
  }
`;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = await client.fetch(query, {
    slug,
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12">

          <h1 className="mb-6 text-6xl font-black">
            {project.title}
          </h1>

          <p className="max-w-3xl text-xl leading-9 text-slate-400">
            {project.description}
          </p>

        </div>

        {project.image && (

          <div className="relative mb-16 h-[500px] overflow-hidden rounded-3xl border border-white/10">

            <Image
              src={urlFor(project.image).url()}
              alt={project.title}
              fill
              className="object-cover"
            />

          </div>

        )}

        <div className="mb-12 flex flex-wrap gap-4">

          {project.technologies?.map((tech: string) => (

            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-cyan-300"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="flex gap-6">

          {project.liveUrl && (

            <a
              href={project.liveUrl}
              target="_blank"
              className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Live Demo
            </a>

          )}

          {project.githubUrl && (

            <a
              href={project.githubUrl}
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

          )}

        </div>

      </div>

    </main>
  );
}