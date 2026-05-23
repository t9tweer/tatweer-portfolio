import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";

export default async function Projects() {

  const projects = await client.fetch(`
    *[_type == "project"]{
      _id,
      title,
      description,
      image
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

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

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

                </div>

              </div>

            </FadeUp>

          ))}

        </div>

      </Container>
    </section>
  );
}