"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function MobileMenu({
  open,
  setOpen,
}: Props) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl"
        >

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute right-0 top-0 flex h-full w-[300px] flex-col border-l border-white/10 bg-[#050816] p-8"
          >

            <div className="mb-16 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-white">
                TatweerX
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={28} />
              </button>

            </div>

            <div className="flex flex-col gap-8">

              {links.map((link) => (
                <button
                  key={link}
                  className="text-left text-2xl font-semibold text-white transition hover:text-cyan-400"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </button>
              ))}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}