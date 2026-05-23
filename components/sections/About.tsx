import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

const cards = [
  {
    title: "Frontend Development",
    description:
      "Modern responsive interfaces using React, Next.js and TailwindCSS.",
  },

  {
    title: "POS Systems",
    description:
      "Building scalable and high-performance POS solutions for businesses.",
  },

  {
    title: "UI/UX Design",
    description:
      "Creating premium user experiences with modern design systems.",
  },
];

export default function About() {
  return (
    <section
     id="about"
     className="relative py-32"
     >
      <Container>

        <FadeUp>
          <div className="mb-20 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-5xl font-black leading-tight text-white">
              Crafting Modern Digital Products
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Passionate software engineer focused on building scalable
              applications, modern user experiences, and premium
              digital products for businesses and startups.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => (
            <FadeUp key={index} delay={index * 0.2}>

              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">

                <div className="mb-6 h-14 w-14 rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20" />

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {card.description}
                </p>

              </div>

            </FadeUp>
          ))}

        </div>
      </Container>
    </section>
  );
}