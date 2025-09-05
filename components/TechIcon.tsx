import Image from "next/image";
import { Reveal, RevealContainer } from "./animation/Reveal";

type Tech = { name: string; src: string };

// Note: c++ filename contains '+', so we use an encoded URL path.
export const TECH_ICONS: Tech[] = [
  { name: "C++", src: "/images/tech-icons/c%2B%2B.png" },
  { name: "Python", src: "/images/tech-icons/python.png" },
  { name: "Java", src: "/images/tech-icons/java.png" },
  { name: "Flutter", src: "/images/tech-icons/flutter-icon.png" },
  { name: "Dart", src: "/images/tech-icons/dart.png" },
  { name: "Git", src: "/images/tech-icons/git.png" },
  { name: "HTML", src: "/images/tech-icons/html.png" },
  { name: "CSS", src: "/images/tech-icons/css.png" },
  { name: "Next.js", src: "/images/tech-icons/nextjs.png" },
  { name: "React", src: "/images/tech-icons/react.png" },
  { name: "Tailwind", src: "/images/tech-icons/tailwind.png" },
  { name: "FastAPI", src: "/images/tech-icons/fastapi.png" },
  { name: "Docker", src: "/images/tech-icons/docker.png" },
  { name: "Nginx", src: "/images/tech-icons/nginx.png" },
];

export function TechIconGrid() {
  return (
    <RevealContainer
      as="ul"
      className="grid grid-cols-4 sm:grid-cols-7 gap-8"
      stagger={0.05}
      immediate
    >
      {TECH_ICONS.map(({ name, src }) => (
        <Reveal
          as="li"
          key={name}
          className="group flex flex-col items-center gap-3"
        >
          <div className="h-18 w-18">
            <Image
              src={src}
              alt={name}
              width={60}
              height={60}
              className="h-18 w-18 object-contain filter grayscale-[0.5] saturate-[0.5] opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:saturate-100 group-hover:opacity-100"
            />
          </div>
        </Reveal>
      ))}
    </RevealContainer>
  );
}
