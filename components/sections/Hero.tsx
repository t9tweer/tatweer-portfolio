import Container from "@/components/layout/Container";
import BackgroundEffects from "@/components/animations/BackgroundEffects";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816]">
      
      <BackgroundEffects />

      <Container>
        <div className="relative z-10 max-w-4xl">

          <FadeUp delay={0.2}>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Software Engineer • UI/UX • POS Systems
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <h1 className="text-6xl font-black leading-tight text-white md:text-8xl">
              Building Modern
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              I create high-performance web applications, POS systems,
              and modern digital products with scalable architecture
              and premium user experience.
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="mt-10 flex gap-4">
              
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400">
                View Projects
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition duration-300 hover:bg-white/10">
                Contact Me
              </button>

            </div>
          </FadeUp>

        </div>
      </Container>

      <div className="absolute right-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-blue-700/20 blur-[120px]" />
    </section>
  );
}