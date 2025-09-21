"use client";
import ProjectCard, { Project } from "./ProjectCard";
import { Reveal, RevealContainer } from "./animation/Reveal";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useMemo, useState } from "react";

const projects: Project[] = [
  {
    slug: "nextime",
    title: "NexTime",
    blurb:
      "Cross-platform Flutter scheduling app with comprehensive web and marketing components.",
    image: "/images/nextime/nextime.jpg",
    tech: ["Flutter", "Dart", "NextJS", "React", "TailwindCSS", "Vite", "Git"],
    year: 2024,
    role: "Lead Mobile Developer",
    categories: ["Mobile Apps", "Web Apps"],
  },
  {
    slug: "zebekov",
    title: "Zebekov Dental Center",
    blurb:
      "Full-stack web application with public site, FastAPI backend, PostgreSQL database, and secure admin dashboard.",
    image: "/images/zebekov/zebekov.jpg",
    tech: [
      "NextJS",
      "React",
      "TailwindCSS",
      "FastAPI",
      "Python",
      "Docker",
      "Git",
      "Nginx",
    ],
    year: 2023,
    role: "Full-Stack Developer",
    categories: ["Web Apps"],
  },
  {
    slug: "court-vision",
    title: "Court Vision AI",
    blurb:
      "AI-powered platform for tennis match predictions and comprehensive analytics dashboard.",
    image: "/images/court-vision/court-vision.jpg",
    tech: [
      "NextJS",
      "React",
      "TailwindCSS",
      "FastAPI",
      "Python",
      "Docker",
      "Git",
      "Nginx",
    ],
    year: 2025,
    role: "Full-Stack & AI/ML Engineer",
    categories: ["AI/ML", "Web Apps"],
  },
  {
    slug: "course-creator",
    title: "Course Creator - Coddy",
    blurb:
      "Educational content creator with 10+ comprehensive courses covering HTML, CSS, C++, Python and advanced programming concepts.",
    image: "/images/course-creator/course-creator.jpg",
    tech: ["HTML", "CSS", "C++", "Python", "Git"],
    year: 2021,
    role: "Course Creator",
    categories: ["Web Apps"],
  },
];

const categories = [
  { id: "all", label: "All Projects", count: projects.length },
  {
    id: "web",
    label: "Web Apps",
    count: projects.filter((p) =>
      p.tech.some((t) => ["Next.js", "React"].includes(t))
    ).length,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    count: projects.filter((p) => p.tech.includes("Flutter")).length,
  },
  {
    id: "ai",
    label: "AI/ML",
    count: projects.filter(
      (p) =>
        p.title.toLowerCase().includes("ai") ||
        p.title.toLowerCase().includes("vision")
    ).length,
  },
];

export default function ProjectsGrid() {
  const TABS = ["All Projects", "Web Apps", "Mobile Apps", "AI/ML"] as const;
  type Tab = (typeof TABS)[number];
  const [activeTab, setActiveTab] = useState<Tab>("All Projects");

  const filtered = useMemo(() => {
    if (activeTab === "All Projects") return projects;
    return projects.filter((p) =>
      p.categories.includes(activeTab as Exclude<Tab, "All Projects">)
    );
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="mx-auto container-max px-4 sm:px-6 md:px-8"
    >
      <RevealContainer as="div" className="text-center mb-8 sm:mb-10">
        <Reveal
          as="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold"
        >
          Featured <span className="text-accent">Projects</span>
        </Reveal>
        <Reveal
          as="p"
          className="mt-3 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg"
        >
          A collection of projects that showcase my skills in mobile
          development, web applications, AI, and educational content creation.
        </Reveal>
      </RevealContainer>
      {/* Tabs */}
      <RevealContainer as="div" className="mb-6 sm:mb-8" stagger={0.03}>
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-white/5 p-1">
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-colors ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </RevealContainer>
      {/* Responsive grid: 3 cols when possible, center when 1-2 items. Layout + presence for smooth tab transitions */}
      <LayoutGroup>
        <RevealContainer
          as="div"
          className={[
            "grid gap-6 mx-auto w-full",
            filtered.length >= 3
              ? "sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1120px]"
              : filtered.length === 2
              ? "sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[740px]"
              : "sm:grid-cols-1 lg:grid-cols-1 lg:max-w-[360px]",
          ].join(" ")}
          stagger={0.08}
          layout
          transition={{
            layout: { type: "spring", duration: 0.45, bounce: 0.08 },
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <Reveal key={p.slug} as="div" layout>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </AnimatePresence>
        </RevealContainer>
      </LayoutGroup>
    </section>
  );
}
