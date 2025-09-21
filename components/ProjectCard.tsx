import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Reveal } from "./animation/Reveal";
import TechBadge from "./TechBadge";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  tech: string[];
  year: number;
  role: string;
  categories: ("Web Apps" | "Mobile Apps" | "AI/ML")[];
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
        {/* Meta row: year and role */}
        <Reveal
          as="div"
          className="mt-1 flex items-center gap-4 text-xs text-text-secondary"
        >
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 opacity-80" />
            <span>{project.year}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 opacity-80" />
            <span className="truncate max-w-[12rem]" title={project.role}>
              {project.role}
            </span>
          </span>
        </Reveal>
        <Reveal as="p" className="text-sm text-text-secondary mt-2">
          {project.blurb}
        </Reveal>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((t) => (
            <TechBadge key={t} name={t} size="sm" />
          ))}
          {project.tech.length > 5 && (
            <span className="inline-flex items-center rounded-full  px-2.5 py-1 text-xs shadow-sm bg-white/10 text-text-secondary">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
