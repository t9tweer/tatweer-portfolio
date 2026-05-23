import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "Framer Motion",
  "MongoDB",
  "PostgreSQL",
  "GitHub",
  "UI/UX",
  "REST APIs",
  "POS Systems",
];

export default function Skills() {
  return (
    <section
     id="skills"
     className="relative py-32"
     >
      <Container>

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Technologies
            </p>

            <h2 className="text-5xl font-black text-white">
              Tools & Technologies
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Modern technologies and scalable development stack
              used to build premium digital experiences.
            </p>

          </div>
        </FadeUp>

        <div className="flex flex-wrap items-center justify-center gap-6">

          {skills.map((skill, index) => (
            <FadeUp key={skill} delay={index * 0.05}>

              <div className="group rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10">

                <span className="text-lg font-medium text-white transition group-hover:text-cyan-300">
                  {skill}
                </span>

              </div>

            </FadeUp>
          ))}

        </div>

      </Container>
    </section>
  );
}