import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]" />

      <Container>

        <div className="relative z-10 py-20">

          {/* Top */}
          <div className="grid gap-16 md:grid-cols-3">

            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black text-white">
                TatweerX
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                Premium software engineering, POS systems,
                modern UI/UX experiences, and scalable
                digital products.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-white">
                Navigation
              </h4>

              <div className="flex flex-col gap-4">

                <a
                  href="#home"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </a>

              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-white">
                Contact
              </h4>

              <div className="flex flex-col gap-4 text-slate-400">

                <p>
                  mus46i3ss4@gmail.com
                </p>

                <p>
                  Cairo, Egypt
                </p>

                <p>
                  Available for freelance projects
                </p>

              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-white/10" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-sm text-slate-500">
              © 2026 TatweerX. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-cyan-400"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-cyan-400"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </Container>
    </footer>
  );
}