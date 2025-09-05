import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import TechBadge from "../../components/TechBadge";
import { Reveal, RevealContainer } from "../../components/animation/Reveal";
import { ArrowLeft, ExternalLink, BookOpen, Code2, Boxes } from "lucide-react";

type Course = {
  title: string;
  image?: string;
  url?: string;
  description: string;
  lessons?: string;
  challenges?: string;
};

const courses: Course[] = [
  {
    title: "Sorting & Searching",
    image: "/images/course-creator/sorting_searching.jpg",
    description:
      "Master the art of sorting and searching. This course covers essential algorithms for efficiently sorting and searching data, allowing you to tackle complex problems",
    lessons: "Lessons: 17",
    challenges: "Challenges: 16",
  },

  {
    title: "Instagram Page Clone | Front-End Project",
    image: "/images/course-creator/instagram_page.jpg",
    url: "https://coddy.tech/courses/instagram_page_clone__frontend_project",
    description:
      "In this course you will practice standard and simple HTML & CSS approaches and create an Instagram Page Clone Project",
    lessons: "Lessons: 16",
    challenges: "Challenges: 15",
  },

  {
    title: "C++ Pointers",
    image: "/images/course-creator/cpp_pointers.jpg",
    url: "https://coddy.tech/courses/cpp_pointers",
    description:
      "Master pointers in C++ using practical examples. Learn memory management, dynamic allocation, and advanced pointer techniques for efficient C++ programming.",
    lessons: "Lessons: 14",
    challenges: "Challenges: 13",
  },
  {
    title: "Coding Problems: Volume 2",
    image: "/images/course-creator/coding_problems2.jpg",
    url: "https://coddy.tech/courses/coding_problems_volume_2",
    description:
      "Put your programming problem solving skills to the test using the exercises with different difficulties in this course. Designed for coders with some prior knowledge of the basic syntax in any programming language. This course is an extension of the first Coding Problems",
    lessons: "Lessons: 25",
    challenges: "Challenges: 24",
  },
  {
    title: "Object-Oriented C++: Brilliance",
    image: "/images/course-creator/cpp_brilliance.jpg",
    url: "https://coddy.tech/courses/objectoriented_cpp_brilliance",
    description:
      "Elevate your C++ skills by mastering object-oriented programming. This Brilliance part of the full course will guide you from medium knowledge to full understanding of advanced concepts, from basics to brilliance in Object-Oriented C++",
    lessons: "Lessons: 21",
    challenges: "Challenges: 17",
  },
  {
    title: "Object-Oriented C++: Basics",
    image: "/images/course-creator/cpp_basics.jpg",
    url: "https://coddy.tech/courses/objectoriented_cpp_basics",
    description:
      "Elevate your C++ skills by mastering object-oriented programming. This Basics part of the full course will guide you from fundamental concepts to intermediate techniques, from basics to brilliance in Object-Oriented C++",
    lessons: "Lessons: 30",
    challenges: "Challenges: 26",
  },
  {
    title: "C++ File Handling",
    image: "/images/course-creator/cpp_file.jpg",
    url: "https://coddy.tech/courses/cpp_file_handling",
    description:
      "Master file handling in C++ with practical lessons on reading, writing, and manipulating files. Learn to efficiently manage text and binary files, handle errors, and apply best practices in real-world applications.",
    lessons: "Lessons: 23",
    challenges: "Challenges: 18",
  },
  {
    title: "Coding Problems",
    image: "/images/course-creator/coding_problems.jpg",
    url: "https://coddy.tech/courses/coding_problems",
    description:
      "Put your programming problem solving skills to the test using the exercises with different difficulties in this course. Designed for coders with some prior knowledge of the basic syntax in any programming language.",
    lessons: "Lessons: 32",
    challenges: "Challenges: 31",
  },
  {
    title: "C++ - Standard Template Library",
    image: "/images/course-creator/cpp_stl.jpg",
    url: "https://coddy.tech/courses/cpp__standard_template_library",
    description:
      "Get introduced to the C++ Standard Template Library, all of it's containers, algorithms and functionalities. Designed for people with some prior knowledge of the C++ Language",
    lessons: "Lessons: 23",
    challenges: "Challenges: 12",
  },
  {
    title: "C++ - Beginner to Intermediate",
    image: "/images/course-creator/cpp_beginner.jpg",
    url: "https://coddy.tech/courses/cpp__beginner_to_intermediate",
    description:
      "Learn the basics of programming and computational thinking using the C++ language. Designed for people who don't have any knowledge about coding and want to learn to code.",
    lessons: "Lessons: 48",
    challenges: "Challenges: 41",
  },
];

export default function CourseCreatorPage() {
  const techStack = ["C++", "Python", "HTML", "CSS", "Java"];
  return (
    <main>
      <Header />
      <section className="pt-28 mx-auto container-max px-4">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-text-secondary hover:text-text-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <Link
            href="https://coddy.tech/creator/7zhsXdJUEfOWdZbLThLg8qXryiD2"
            target="_blank"
            className="underline inline-flex items-center gap-2"
          >
            Creator Profile <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Course Creator — Coddy
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-3">
            A set of ten practical courses spanning HTML, CSS, C++, and Python.
            Focused on fundamentals, projects, and challenge-based learning to
            build real skills.
          </p>
        </div>

        {/* Tech badges */}
        <RevealContainer
          as="div"
          className="flex flex-wrap justify-center gap-3 mb-10"
          stagger={0.05}
        >
          {techStack.map((tech) => (
            <Reveal as="span" key={tech}>
              <TechBadge name={tech} size="lg" />
            </Reveal>
          ))}
        </RevealContainer>
        {/* Keep 9 rows layout */}
        <div className="grid gap-6">
          {courses.map((c, idx) => {
            const Inner = (
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start rounded-xl border border-white/5 bg-surface/60 p-4 hover:bg-surface/70 transition-colors">
                <div className="relative rounded-md bg-black/20 aspect-video overflow-hidden flex items-center justify-center text-text-secondary">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(min-width: 768px) 220px, 90vw"
                      className="object-cover"
                      priority={idx < 2}
                    />
                  ) : (
                    <span>Course image</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {c.title}
                  </h3>
                  <p className="text-text-secondary mt-2">{c.description}</p>
                  <div className="mt-2 text-xs text-text-secondary/70 flex gap-4">
                    <span>{c.lessons}</span>
                    <span>{c.challenges}</span>
                  </div>
                </div>
              </div>
            );

            return c.url ? (
              <Link
                key={idx}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Inner}
              </Link>
            ) : (
              <div key={idx} className="block">
                {Inner}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
