import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Reveal, RevealContainer } from "./animation/Reveal";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-surface-elevated/60">
      <RevealContainer
        as="div"
        className="mx-auto container-max px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary"
      >
        <Reveal className="font-semibold">
          <span className="text-text-secondary">&lt;/</span>
          <span className="text-text-primary">Zimbakov</span>
          <span className="text-text-secondary">&gt;</span>
        </Reveal>
        <Reveal as="div" className="flex items-center gap-4">
          <a
            href="mailto:damjan@zimbakov.dev"
            aria-label="Email"
            className="hover:text-text-primary"
          >
            <Mail size={18} />
          </a>
          <Link
            href="https://github.com/zimbakovtech"
            aria-label="GitHub"
            className="hover:text-text-primary"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/damjan-zimbakov-775077213/"
            aria-label="LinkedIn"
            className="hover:text-text-primary"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://instagram.com/damjanzimbakov"
            aria-label="Instagram"
            className="hover:text-text-primary"
          >
            <Instagram size={18} />
          </Link>
        </Reveal>
        <Reveal className="opacity-70">
          © {new Date().getFullYear()} Damjan Zimbakov
        </Reveal>
      </RevealContainer>
    </footer>
  );
}
