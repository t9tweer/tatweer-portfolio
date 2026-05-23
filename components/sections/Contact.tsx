"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_we20gmd",
        "template_0zr95bs",
        form.current,
        "5PL2VfgCzpwPgevPa"
      );

      setSuccess("Message sent successfully.");
      form.current.reset();
    } catch (error) {
      setSuccess("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050816] py-32"
    >
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>

            <h2 className="text-5xl font-black text-white">
              Let’s Work Together
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Have a project idea, startup, or business system?
              Send me a message and let’s build something powerful.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-12 space-y-6"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-lg transition focus:border-cyan-400"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-lg transition focus:border-cyan-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-lg transition focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-cyan-500 px-10 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-sm text-cyan-400">
                  {success}
                </p>
              )}

            </form>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}