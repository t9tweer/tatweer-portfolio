import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";

import Link from "next/link";

export default async function Projects() {

  const projects = await client.fetch(`
  *[_type == "project" && featured == true] | order(order asc){
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl
  }
`);

  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <Container>

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Portfolio
            </p>

            <h2 className="text-5xl font-black text-white">
              Featured Projects
            </h2>

          </div>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project: any, index: number) => (

            <FadeUp key={project._id} delay={index * 0.2}>

              <Link href={`/projects/${project.slug.current}`}>

                <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="relative h-56">

                  {project.image && (
                    <Image
                      src={urlFor(project.image).url()}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}

                </div>

                <div className="p-8">

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    {project.technologies?.map((tech: string) => (

                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>
              
              </Link>

            </FadeUp>

          ))}

        </div>

      </Container>
    </section>
  );
}