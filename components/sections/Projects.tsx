import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

const projects = [
  {
    title: "Tatweer POS",
    description:
      "Modern POS system with scalable architecture and premium UI/UX.",
    tags: ["Next.js", "TypeScript", "POS"],
  },

  {
    title: "TatweerX Portfolio",
    description:
      "Modern animated portfolio with cinematic SaaS interface.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },

  {
    title: "Business Dashboard",
    description:
      "Analytics dashboard for business management and reporting.",
    tags: ["Dashboard", "Charts", "UI/UX"],
  },
];

export default function Projects() {
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

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Selected projects showcasing modern development,
              scalable systems, and premium digital experiences.
            </p>

          </div>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.2}>

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40">

                <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-blue-700/20" />

                <div className="p-8">

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="flex gap-4">

                    <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-cyan-400">
                      Live Demo
                    </button>

                    <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10">
                      GitHub
                    </button>

                  </div>

                </div>

              </div>

            </FadeUp>
          ))}

        </div>

      </Container>
    </section>
  );
}