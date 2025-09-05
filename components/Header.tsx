"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Reveal, RevealContainer } from "./animation/Reveal";

const nav = [
  { href: "/#home", label: "home" },
  { href: "/#about", label: "about" },
  { href: "/#projects", label: "projects" },
  { href: "/#contact", label: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all ${
          scrolled ? "glass" : "bg-transparent"
        } z-30`}
      >
        <div className="mx-auto container-max px-4 py-3 flex items-center justify-between">
          <Reveal as="div" immediate>
            <Link
              href="/#home"
              className="text-2xl sm:text-3xl font-mono tracking-tight"
            >
              <span className="text-accent">&lt;/</span>
              <span className="text-text-primary">Zimbakov</span>
              <span className="text-accent">&gt;</span>
            </Link>
          </Reveal>

          <nav className="hidden md:flex items-center gap-7 font-mono text-xl text-text-secondary">
            <RevealContainer
              as="div"
              className="flex items-center gap-7"
              immediate
              stagger={0.05}
            >
              {nav.map((n) => (
                <Reveal as="div" key={n.href} immediate>
                  <Link
                    href={n.href}
                    className="hover:text-accent transition-colors"
                  >
                    _{n.label}
                  </Link>
                </Reveal>
              ))}
            </RevealContainer>
          </nav>

          <RevealContainer
            as="div"
            className="hidden md:flex items-center gap-3"
            immediate
            stagger={0.05}
          >
            {/* social icons + CV button... (unchanged) */}
            <Reveal as="div" immediate>
              <Link
                href="https://github.com/zimbakovtech"
                aria-label="GitHub"
                target="_blank"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Github size={25} />
              </Link>
            </Reveal>
            <Reveal as="div" immediate>
              <Link
                href="https://www.linkedin.com/in/damjan-zimbakov-775077213/"
                aria-label="LinkedIn"
                target="_blank"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin size={25} />
              </Link>
            </Reveal>
            <Reveal as="div" immediate>
              <Link
                href="https://instagram.com/damjanzimbakov"
                aria-label="Instagram"
                target="_blank"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Instagram size={25} />
              </Link>
            </Reveal>
            <Reveal
              as="a"
              immediate
              href="mailto:zimbakovtech@gmail.com"
              target="_blank"
              aria-label="Email"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <Mail size={25} />
            </Reveal>
            <Reveal as="div" immediate>
              <Link
                href="/Resume.pdf"
                target="_blank"
                download
                className="ml-2 inline-flex items-center rounded-full bg-accent hover:bg-accent-hover text-text-primary px-3 py-1.5 text-sm font-mono transition-colors"
              >
                Download CV
              </Link>
            </Reveal>
          </RevealContainer>

          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-12 h-12 rounded-md hover:bg-white/5 active:bg-white/10"
            onClick={() => setOpen(true)}
          >
            <div className="w-7 h-0.5 bg-text-primary rounded" />
            <div className="w-7 h-0.5 bg-text-primary rounded" />
            <div className="w-7 h-0.5 bg-text-primary rounded" />
          </button>
        </div>
      </header>

      {/* Mobile menu + backdrop rendered outside the header to avoid stacking/backdrop issues */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop for outside click + scroll lock */}
            <motion.div
              aria-hidden
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              aria-label="Mobile Menu"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-[100dvh] w-72 glass bg-surface/70 z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  <span className="text-accent">&lt;/</span>Zimbakov
                  <span className="text-accent">&gt;</span>
                </span>
                <button
                  aria-label="Close Menu"
                  className="w-10 h-10 rounded-md hover:bg-white/5 active:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <div className="w-5 h-0.5 bg-text-primary rotate-45 translate-y-0.5" />
                  <div className="w-5 h-0.5 bg-text-primary -rotate-45 -translate-y-0.5 -mt-0.5" />
                </button>
              </div>
              <div className="mt-6 flex-1 overflow-y-auto flex flex-col gap-4 font-mono text-text-secondary text-lg">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
              <div className="pt-6 flex items-center gap-4 text-text-secondary">
                <Link
                  href="https://github.com/zimbakovtech"
                  aria-label="GitHub"
                  className="hover:text-accent"
                >
                  <Github />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/damjan-zimbakov-775077213/"
                  aria-label="LinkedIn"
                  className="hover:text-accent"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://instagram.com/damjanzimbakov"
                  aria-label="Instagram"
                  className="hover:text-accent"
                >
                  <Instagram />
                </Link>
                <a
                  href="mailto:zimbakovtech@gmail.com"
                  aria-label="Email"
                  className="hover:text-accent"
                >
                  <Mail />
                </a>
                <Link
                  href="/Resume.pdf"
                  download
                  className="ml-auto inline-flex items-center text-center rounded-full bg-accent hover:bg-accent-hover text-white px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  Resume
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
