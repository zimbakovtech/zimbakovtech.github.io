import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./animation/Reveal";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  tech: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}/`}
      className="group block rounded-xl overflow-hidden border border-white/5 bg-surface hover:bg-surface transition-colors"
    >
      <Reveal as="div" className="aspect-[16/9] bg-black/20 relative">
        {/* Placeholder image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </Reveal>
      <div className="p-4">
        <Reveal as="h3" className="text-lg font-semibold">
          {project.title}
        </Reveal>
        <Reveal as="p" className="text-sm text-text-secondary mt-1">
          {project.blurb}
        </Reveal>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wide font-mono bg-white/5 text-text-secondary rounded-full px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
