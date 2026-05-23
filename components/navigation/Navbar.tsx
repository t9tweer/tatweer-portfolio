"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import MobileMenu from "./MobileMenu";

import { Menu } from "lucide-react";

const links = [
  {
    label: "Home",
    href: "#home",
  },

  {
    label: "About",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
    
      <header
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/40 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >

        <Container>

          <div className="flex h-20 items-center justify-between">

            <h1 className="text-3xl font-black tracking-wide text-white">
              TatweerX
            </h1>

            <nav className="hidden items-center gap-10 md:flex">

              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-semibold text-white transition hover:text-cyan-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              className="text-white md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu size={32} />
            </button>

          </div>

        </Container>

      </header>

      <MobileMenu open={open} setOpen={setOpen} />

    </>
  );
}