import ProjectCard, { Project } from "./ProjectCard";
import { Reveal, RevealContainer } from "./animation/Reveal";

const projects: Project[] = [
  {
    slug: "nextime",
    title: "NexTime",
    blurb: "Cross-platform Flutter scheduling app with web and marketing site.",
    image: "/images/nextime/nextime.jpg",
    tech: ["Flutter", "Dart", "NextJS", "React", "TailwindCSS", "Vite", "Git"],
  },
  {
    slug: "zebekov",
    title: "Zebekov Dental Center",
    blurb:
      "Public site, FastAPI backend, PostgreSQL, and secure admin dashboard.",
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
  },
  {
    slug: "court-vision",
    title: "Court Vision AI",
    blurb: "AI-powered platform for tennis match predictions and analytics.",
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
  },
  {
    slug: "course-creator",
    title: "Course Creator - Coddy, Inc.",
    blurb: "10 creator-led courses on HTML, CSS, C++, Python and more.",
    image: "/images/course-creator/course-creator.jpg",
    tech: ["HTML", "CSS", "C++", "Python", "Git"],
  },
];

export default function ProjectsGrid() {
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
      <RevealContainer
        as="div"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.1}
      >
        {projects.map((p) => (
          <Reveal key={p.slug} as="div">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </RevealContainer>
    </section>
  );
}
